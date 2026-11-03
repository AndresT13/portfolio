import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, ViewChild, inject } from '@angular/core';
import { gsap } from 'gsap';

/** Paisaje distópico Angular + GSAP: bucle automático, sin botones y sin Three.js. */
@Component({
  selector: 'app-dystopian-hero',
  standalone: true,
  templateUrl: './dystopian-hero.component.html',
  styleUrl: './dystopian-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DystopianHeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scene', { static: true }) private scene!: ElementRef<HTMLElement>;
  private readonly zone = inject(NgZone);
  private context?: gsap.Context;
  readonly birds = Array.from({ length: 10 }, (_, index) => index);

  ngAfterViewInit(): void {
    // La escena empieza sola al montarse el componente; permanece en loop infinito.
    this.zone.runOutsideAngular(() => {
      this.context = gsap.context(() => {
        const stage = this.scene.nativeElement;
        gsap.set('.night-layer', { opacity: 0 });
        gsap.set('.bird', { opacity: 1 });

        // 12 segundos por vuelta: día (2s), transición a noche (2s), noche (3s), amanecer (2s).
        const cycle = gsap.timeline({ repeat: -1, defaults: { ease: 'sine.inOut' } });
        cycle
          .to({}, { duration: 2 })
          .to('.night-layer', { opacity: 0.82, duration: 2 })
          .to({}, { duration: 3 })
          .to('.night-layer', { opacity: 0, duration: 2 })
          .to({}, { duration: 3 });

        // Aves: recorrido real de izquierda a derecha, con alturas y velocidades diferentes.
        const flock = gsap.utils.toArray<HTMLElement>('.bird');
        flock.forEach((bird, index) => {
          const flightTime = 7 + (index % 5) * 1.7;
          gsap.fromTo(bird,
            { x: -95, y: 0, scale: 0.72 + (index % 4) * 0.11 },
            { x: () => stage.clientWidth + 160, y: -35 + index * 6, duration: flightTime, delay: index * 0.43, repeat: -1, repeatRefresh: true, ease: 'none' }
          );
          gsap.to(bird, { yPercent: index % 2 ? 26 : -26, duration: 0.9 + index * 0.05, yoyo: true, repeat: -1, ease: 'sine.inOut' });
          gsap.to(bird.querySelectorAll('.wing'), { scaleY: 0.18, transformOrigin: '50% 65%', duration: 0.24 + (index % 3) * 0.045, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        });

        // Entrada inicial; no interrumpe el ciclo del paisaje.
        gsap.from('.hero-copy > *', { opacity: 0, y: 20, duration: 1.05, stagger: 0.10, ease: 'power2.out' });
      }, this.scene.nativeElement);
    });
  }

  ngOnDestroy(): void { this.context?.revert(); }
}
