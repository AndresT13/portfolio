// Configuración de dominio del portafolio. Editar aquí; los componentes solo leen estos datos.
export type Lang = 'en' | 'es';

export interface CredlyBadge {
  id: string;
  title: string;
  issuer: string;
  /** URL absoluta https o ruta dentro de /public (p. ej. assets/badges/aws.png). */
  imageUrl: string;
  /** Debe ser una URL https de credly.com; si no, el badge no se renderiza. */
  verificationUrl: string;
  /** Formato YYYY-MM */
  issuedDate: string;
}

export interface Technology {
  name: string;
  logoUrl: string;
  active: boolean;
}

export interface PortfolioConfig {
  faviconPath: string;
  defaultLanguage: Lang;
  supportedLanguages: readonly Lang[];
  credlyProfileUrl?: string;
  credlyBadges: CredlyBadge[];
  technologies: Technology[];
}

export const PORTFOLIO_CONFIG: PortfolioConfig = {
  faviconPath: 'assets/images/favicon.png',
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'es'],
  // credlyProfileUrl: 'https://www.credly.com/users/<tu-usuario>',
  credlyBadges: [
    {
      id: 'badge-1',
      title: '[NOMBRE_CERTIFICACION]',
      issuer: '[ENTIDAD_EMISORA]',
      imageUrl: '[URL_O_RUTA_IMAGEN_BADGE_PNG]',
      verificationUrl: '[URL_VERIFICACION_CREDLY]',
      issuedDate: 'YYYY-MM',
    },
  ],
  technologies: [
    { name: 'Java', logoUrl: 'assets/tech/java.svg', active: true },
    { name: 'Spring Boot', logoUrl: 'assets/tech/spring-boot.svg', active: true },
    { name: 'Angular', logoUrl: 'assets/tech/angular.svg', active: true },
    // Disponibles: cambiar active a true para mostrarlas.
    { name: 'TypeScript', logoUrl: 'assets/tech/typescript.svg', active: false },
    { name: 'Next.js', logoUrl: 'assets/tech/nextjs.svg', active: false },
    { name: 'Docker', logoUrl: 'assets/tech/docker.svg', active: false },
    { name: 'AWS', logoUrl: 'assets/tech/aws.svg', active: false },
    { name: 'Python', logoUrl: 'assets/tech/python.svg', active: false },
  ],
};

const isPlaceholder = (v: string) => !v || /^\[.*\]$/.test(v.trim()) || v.includes('YYYY');

const isSafeImage = (v: string) => {
  if (isPlaceholder(v)) return false;
  if (!/^[a-z]+:/i.test(v)) return true; // ruta relativa dentro de /public
  try { return new URL(v).protocol === 'https:'; } catch { return false; }
};

const isCredlyUrl = (v: string) => {
  if (isPlaceholder(v)) return false;
  try {
    const u = new URL(v);
    return u.protocol === 'https:' && (u.hostname === 'credly.com' || u.hostname.endsWith('.credly.com'));
  } catch { return false; }
};

/** Solo badges con datos reales, imagen válida y verificación en credly.com. */
export const VERIFIED_BADGES: CredlyBadge[] = PORTFOLIO_CONFIG.credlyBadges.filter(
  b => !isPlaceholder(b.title) && !isPlaceholder(b.issuer) && isSafeImage(b.imageUrl) && isCredlyUrl(b.verificationUrl) && /^\d{4}-\d{2}$/.test(b.issuedDate),
);

/** Solo tecnologías marcadas como activas. */
export const ACTIVE_TECHNOLOGIES: Technology[] = PORTFOLIO_CONFIG.technologies.filter(t => t.active);
