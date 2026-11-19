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
  credlyProfileUrl: 'https://www.credly.com/users/jaime-andres-tellez-gonzalez/badges',
  credlyBadges: [
    {
      id: '5016ce79-6a87-4839-8189-9bb585c20e58',
      title: "MongoDB Query Optimization Techniques",
      issuer: 'MongoDB',
      imageUrl: 'https://images.credly.com/images/e3d619cf-ce1f-4b75-ad4f-78c68cbbae51/blob',
      verificationUrl: 'https://www.credly.com/badges/5016ce79-6a87-4839-8189-9bb585c20e58/public_url',
      issuedDate: '2026-11',
    },
    {
      id: '644b97db-da80-4dec-8d6b-d8bed9b75cc2',
      title: "MongoDB Sharding Strategies",
      issuer: 'MongoDB',
      imageUrl: 'https://images.credly.com/images/014a5b40-118f-41ed-8f19-9b19437e12fb/blob',
      verificationUrl: 'https://www.credly.com/badges/644b97db-da80-4dec-8d6b-d8bed9b75cc2/public_url',
      issuedDate: '2026-11',
    },
    {
      id: '154d5851-35be-44e3-b9ec-d0abc8297627',
      title: "Monitoring MongoDB with Built-in Tools",
      issuer: 'MongoDB',
      imageUrl: 'https://images.credly.com/images/2b4f2381-9223-4c09-b6e7-c0a17d0045c4/blob',
      verificationUrl: 'https://www.credly.com/badges/154d5851-35be-44e3-b9ec-d0abc8297627/public_url',
      issuedDate: '2026-11',
    },
    {
      id: '1823b35d-3677-4a3d-91af-b92e36cec2be',
      title: "MongoDB Indexing Design Fundamentals",
      issuer: 'MongoDB',
      imageUrl: 'https://images.credly.com/images/27213be6-415d-411f-a69a-0171ca2c89f5/blob',
      verificationUrl: 'https://www.credly.com/badges/1823b35d-3677-4a3d-91af-b92e36cec2be/public_url',
      issuedDate: '2026-11',
    },
    {
      id: 'cd8c6a23-d59f-4dab-a300-5133f7fb073f',
      title: "MongoDB Aggregation Fundamentals",
      issuer: 'MongoDB',
      imageUrl: 'https://images.credly.com/images/ca2735bc-3fbb-4536-839d-90d6047585d3/blob',
      verificationUrl: 'https://www.credly.com/badges/cd8c6a23-d59f-4dab-a300-5133f7fb073f/public_url',
      issuedDate: '2026-10',
    },
    {
      id: '7f0539d0-fd94-4cf5-ab3a-7b0df761d8a4',
      title: "CRUD Operations in MongoDB",
      issuer: 'MongoDB',
      imageUrl: 'https://images.credly.com/images/d8f7a9d6-dad9-40cc-b389-a343d2d72a9e/blob',
      verificationUrl: 'https://www.credly.com/badges/7f0539d0-fd94-4cf5-ab3a-7b0df761d8a4/public_url',
      issuedDate: '2026-10',
    },
    {
      id: 'fdd60bc0-d958-407b-8798-d67fa19efd30',
      title: "MongoDB Overview: Core Concepts and Architecture",
      issuer: 'MongoDB',
      imageUrl: 'https://images.credly.com/images/0b4c54ef-b1d8-4aa7-a658-230b74dec7f6/blob',
      verificationUrl: 'https://www.credly.com/badges/fdd60bc0-d958-407b-8798-d67fa19efd30/public_url',
      issuedDate: '2026-10',
    },
    {
      id: '0dbf34e4-83cc-4524-8099-e5cbbb694e29',
      title: "From Relational Model (SQL) to MongoDB's Document Model",
      issuer: 'MongoDB',
      imageUrl: 'https://images.credly.com/images/234edfc5-0177-46e7-a61a-071f060af2f6/blob',
      verificationUrl: 'https://www.credly.com/badges/0dbf34e4-83cc-4524-8099-e5cbbb694e29/public_url',
      issuedDate: '2026-10',
    },
    {
      id: 'f54b049e-5096-45a4-a4ee-2214f09f3e77',
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: 'Amazon Web Services Training and Certification',
      imageUrl: 'https://images.credly.com/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob',
      verificationUrl: 'https://www.credly.com/badges/f54b049e-5096-45a4-a4ee-2214f09f3e77/public_url',
      issuedDate: '2025-02',
    },
    {
      id: '5d2533fd-a46a-4e33-a665-1175d2c23ce2',
      title: "Lifelong Learning",
      issuer: 'CertiProf',
      imageUrl: 'https://images.credly.com/images/21e16d4d-d2df-46e6-9098-526caab49e63/blob',
      verificationUrl: 'https://www.credly.com/badges/5d2533fd-a46a-4e33-a665-1175d2c23ce2/public_url',
      issuedDate: '2023-02',
    },
    {
      id: '6a9a0018-d636-47b8-9e8d-c5a48b29302c',
      title: "Design Thinking Professional Certificate - DTPC®",
      issuer: 'CertiProf',
      imageUrl: 'https://images.credly.com/images/e173fd04-4f89-4310-8a42-e16c04b843ed/image.png',
      verificationUrl: 'https://www.credly.com/badges/6a9a0018-d636-47b8-9e8d-c5a48b29302c/public_url',
      issuedDate: '2022-03',
    },
  ],
  technologies: [
    { name: 'Java', logoUrl: 'assets/tech/java.svg', active: true },
    { name: 'Spring Boot', logoUrl: 'assets/tech/spring-boot.svg', active: true },
    { name: 'Angular', logoUrl: 'assets/tech/angular.svg', active: true },
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
