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

export type TechCategory = 'backend' | 'architecture' | 'frontend' | 'databases' | 'cloud' | 'quality' | 'ai';

export interface Technology {
  name: string;
  /** Nombre en español, solo si difiere del inglés. */
  nameEs?: string;
  category: TechCategory;
  /** Opcional: los conceptos sin logo muestran `abbr` dentro del ícono. */
  logoUrl?: string;
  /** Sigla mostrada en el ícono cuando no hay logo. */
  abbr?: string;
  active: boolean;
}

export const TECH_CATEGORIES: TechCategory[] = ['backend', 'architecture', 'frontend', 'databases', 'cloud', 'quality', 'ai'];

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
  ],
  technologies: [
    // backend
    { name: 'Java 8/11/17/21', category: 'backend', logoUrl: 'assets/tech/java.svg', active: true },
    { name: 'Spring Boot', category: 'backend', logoUrl: 'assets/tech/spring-boot.svg', active: true },
    { name: 'Spring MVC', category: 'backend', logoUrl: 'assets/tech/spring-boot.svg', active: true },
    { name: 'Spring WebFlux', category: 'backend', logoUrl: 'assets/tech/spring-boot.svg', active: true },
    { name: 'Reactive programming', nameEs: 'Programación reactiva', category: 'backend', logoUrl: 'assets/tech/reactivex.svg', active: true },
    { name: 'Spring Security', category: 'backend', logoUrl: 'assets/tech/spring-security.svg', active: true },
    { name: 'Spring Data JPA', category: 'backend', logoUrl: 'assets/tech/spring-boot.svg', active: true },
    { name: 'Spring Batch', category: 'backend', logoUrl: 'assets/tech/spring-boot.svg', active: true },
    { name: 'Spring AI', category: 'backend', logoUrl: 'assets/tech/spring-boot.svg', active: true },
    { name: 'Hibernate', category: 'backend', logoUrl: 'assets/tech/hibernate.svg', active: true },
    { name: 'JPA', category: 'backend', abbr: 'JPA', active: true },
    { name: 'Maven', category: 'backend', logoUrl: 'assets/tech/maven.svg', active: true },
    { name: 'Gradle', category: 'backend', logoUrl: 'assets/tech/gradle.svg', active: true },
    // architecture
    { name: 'Microservices', nameEs: 'Microservicios', category: 'architecture', abbr: 'MS', active: true },
    { name: 'Hexagonal architecture', nameEs: 'Arquitectura hexagonal', category: 'architecture', abbr: 'HEX', active: true },
    { name: 'DDD', category: 'architecture', abbr: 'DDD', active: true },
    { name: 'SOLID', category: 'architecture', abbr: 'SOLID', active: true },
    { name: 'REST APIs', category: 'architecture', abbr: 'REST', active: true },
    { name: 'OpenAPI', category: 'architecture', logoUrl: 'assets/tech/openapi.svg', active: true },
    { name: 'Apache Camel', category: 'architecture', abbr: 'CML', active: true },
    { name: 'Apache Kafka', category: 'architecture', logoUrl: 'assets/tech/kafka.svg', active: true },
    { name: 'RabbitMQ', category: 'architecture', logoUrl: 'assets/tech/rabbitmq.svg', active: true },
    { name: 'GraphQL', category: 'architecture', logoUrl: 'assets/tech/graphql.svg', active: true },
    { name: 'Eureka', category: 'architecture', abbr: 'EU', active: true },
    { name: 'Circuit Breaker', category: 'architecture', abbr: 'CB', active: true },
    { name: 'Kong API Gateway', category: 'architecture', logoUrl: 'assets/tech/kong.svg', active: true },
    { name: 'Kong Manager', category: 'architecture', logoUrl: 'assets/tech/kong.svg', active: true },
    { name: 'Kong Mesh', category: 'architecture', logoUrl: 'assets/tech/kong.svg', active: true },
    { name: 'OAuth2', category: 'architecture', logoUrl: 'assets/tech/oauth.svg', active: true },
    { name: 'JWT', category: 'architecture', logoUrl: 'assets/tech/jwt.svg', active: true },
    // frontend
    { name: 'Angular 11+', category: 'frontend', logoUrl: 'assets/tech/angular.svg', active: true },
    { name: 'Angular Material', category: 'frontend', logoUrl: 'assets/tech/angular-material.svg', active: true },
    { name: 'TypeScript', category: 'frontend', logoUrl: 'assets/tech/typescript.svg', active: true },
    { name: 'JavaScript', category: 'frontend', logoUrl: 'assets/tech/javascript.svg', active: true },
    { name: 'SCSS', category: 'frontend', logoUrl: 'assets/tech/sass.svg', active: true },
    { name: 'Bootstrap', category: 'frontend', logoUrl: 'assets/tech/bootstrap.svg', active: true },
    { name: 'Ionic', category: 'frontend', logoUrl: 'assets/tech/ionic.svg', active: true },
    { name: 'Compodoc', category: 'frontend', abbr: 'CD', active: true },
    // databases
    { name: 'Oracle PL/SQL', category: 'databases', logoUrl: 'assets/tech/oracle.svg', active: true },
    { name: 'PostgreSQL', category: 'databases', logoUrl: 'assets/tech/postgresql.svg', active: true },
    { name: 'SQL Server', category: 'databases', logoUrl: 'assets/tech/sqlserver.svg', active: true },
    { name: 'MongoDB', category: 'databases', logoUrl: 'assets/tech/mongodb.svg', active: true },
    // cloud
    { name: 'Microsoft Azure', category: 'cloud', logoUrl: 'assets/tech/azure.svg', active: true },
    { name: 'AWS EC2/\u200bS3/\u200bLambda/\u200bCloudWatch/\u200bEBS', category: 'cloud', logoUrl: 'assets/tech/aws.svg', active: true },
    { name: 'Docker', category: 'cloud', logoUrl: 'assets/tech/docker.svg', active: true },
    { name: 'Jenkins CI/CD', category: 'cloud', logoUrl: 'assets/tech/jenkins.svg', active: true },
    { name: 'Azure DevOps', category: 'cloud', logoUrl: 'assets/tech/azure-devops.svg', active: true },
    { name: 'OpenShift', category: 'cloud', logoUrl: 'assets/tech/openshift.svg', active: true },
    { name: 'JFrog Artifactory', category: 'cloud', logoUrl: 'assets/tech/jfrog.svg', active: true },
    { name: 'Git', category: 'cloud', logoUrl: 'assets/tech/git.svg', active: true },
    // quality
    { name: 'JUnit', category: 'quality', logoUrl: 'assets/tech/junit.svg', active: true },
    { name: 'Mockito', category: 'quality', abbr: 'MO', active: true },
    { name: 'Vitest', category: 'quality', logoUrl: 'assets/tech/vitest.svg', active: true },
    { name: 'JaCoCo', category: 'quality', abbr: 'JCC', active: true },
    { name: 'SonarQube', category: 'quality', logoUrl: 'assets/tech/sonarqube.svg', active: true },
    { name: 'Checkmarx', category: 'quality', logoUrl: 'assets/tech/checkmarx.svg', active: true },
    { name: 'AppScan', category: 'quality', logoUrl: 'assets/tech/hcl.svg', active: true },
    { name: 'Black Duck', category: 'quality', abbr: 'BD', active: true },
    { name: 'OWASP Dependency-Check', category: 'quality', logoUrl: 'assets/tech/owasp.svg', active: true },
    // ai
    { name: 'ChatGPT', category: 'ai', abbr: 'GPT', active: true },
    { name: 'Gemini', category: 'ai', logoUrl: 'assets/tech/gemini.svg', active: true },
    { name: 'Claude', category: 'ai', logoUrl: 'assets/tech/claude.svg', active: true },
    { name: 'Google Toolkit AI', category: 'ai', logoUrl: 'assets/tech/google.svg', active: true },
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

/** Tecnologías activas agrupadas por categoría (se omiten categorías vacías). */
export const ACTIVE_TECH_GROUPS = TECH_CATEGORIES
  .map(category => ({ category, items: ACTIVE_TECHNOLOGIES.filter(t => t.category === category) }))
  .filter(g => g.items.length > 0);
