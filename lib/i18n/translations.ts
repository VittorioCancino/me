export const translations = {
  en: {
    sidebar: {
      role: "Software Developer · Educator",
      pronouns: "he/him",
      bio: "Turning caffeine into code and dreams into reality",
      followers: "followers",
      following: "following",
    },
    home: {
      whoami: {
        title: "Who am I",
        p1: "I'm a software developer and educator based in Viña del Mar, working towards a future as a developer or sysadmin. My main focus is infrastructure design — building systems that provision, deploy, and tear themselves down without anyone having to babysit them. I've been working with Linux servers for over three years, rely heavily on Ansible for system configuration, and have a strong preference for declarative approaches: if it can't be described as code, it probably shouldn't exist.",
        p2: "I'm a Kubernetes enjoyer, actively learning C and Go, and I read broadly across computer engineering — systems design, compilers, networking. I maintain open-source tooling under IT-LAB-UAI and contribute personal projects on GitHub.",
        p3: "I'm also an AI enthusiast — not an expert, just someone genuinely excited by the possibilities of applying new models to everyday problems and making life a little better. And when I'm not at a terminal, I'm probably gaming with friends.",
        highlights: {
          sysadmin: "developer or sysadmin",
          infra: "infrastructure design",
          ansible: "Ansible",
          declarative: "declarative approaches",
          kubernetes: "Kubernetes enjoyer",
          c: "C",
          go: "Go",
          itlab: "IT-LAB-UAI",
          ai: "AI enthusiast",
          gaming: "gaming with friends",
        },
      },
      courses: {
        title: "Courses",
      },
    },
    courses: {
      back: "Back",
      tics320: {
        label: "TICS320",
        title: "Databases",
        description:
          "An introduction to databases and data management — covering relational models, query design, normalisation, and an overview of non-relational approaches. This page collects lectures, reference materials, and the practicum sessions I run weekly for the course.",
        lectures: {
          title: "Lectures",
          description: "Slides and materials from the course lectures.",
          empty: "Nothing here yet.",
        },
        materials: {
          title: "Materials",
          description: "Readings, references, and supplementary resources.",
        },
        practicum: {
          title: "Practicum",
          description: "Weekly sessions I run with exercises, examples, and practice problems.",
          empty: "Nothing here yet.",
          openSlides: "Open slides",
        },
      },
    },
    materialItems: [
      {
        title: "PostgreSQL",
        description:
          "The relational database engine we use throughout this course. PostgreSQL is a powerful, open-source object-relational database system with over 35 years of active development. We chose it because it is the industry standard for relational workloads, has excellent SQL compliance, and is free to run locally or in the cloud.",
        href: "https://www.postgresql.org/",
        label: "postgresql.org",
      },
      {
        title: "Supabase",
        description:
          "If you don't want to install PostgreSQL locally, Supabase offers a free-tier hosted PostgreSQL instance you can spin up in minutes. It also ships a built-in SQL editor so you can run queries directly from the browser — no client needed.",
        href: "https://supabase.com/",
        label: "supabase.com",
      },
      {
        title: "pgAdmin",
        description:
          "The most popular desktop client for PostgreSQL. pgAdmin gives you a visual interface to manage databases, browse tables, and run queries. Useful when you want more than a terminal but prefer working against a local or remote instance directly.",
        href: "https://www.pgadmin.org/",
        label: "pgadmin.org",
      },
    ],
    practicumItems: [
      {
        number: 1,
        title: "Database Design & Modeling",
        description:
          "ER diagrams, logical models, cardinality, and how to think when designing a database from scratch. Includes a hands-on exercise.",
        href: "/presentations/tics320/practicum-1/index.html",
      },
    ],
    courseList: [
      {
        code: "TICS320",
        name: "Databases",
        description: "Relational and non-relational databases, query design, and data modelling.",
        slug: "tics320",
      },
    ],
  },

  es: {
    sidebar: {
      role: "Desarrollador de Software · Educador",
      pronouns: "él",
      bio: "Convirtiendo cafeína en código y sueños en realidad",
      followers: "seguidores",
      following: "siguiendo",
    },
    home: {
      whoami: {
        title: "¿Quién soy?",
        p1: "Soy un desarrollador de software y educador basado en Viña del Mar, con proyección hacia un futuro como desarrollador o sysadmin. Mi enfoque principal es el diseño de infraestructura — construir sistemas que se aprovisionen, desplieguen y eliminen solos sin que nadie tenga que supervisarlos. Llevo más de tres años trabajando con servidores Linux, uso ampliamente Ansible para la configuración de sistemas, y tengo una fuerte preferencia por enfoques declarativos: si no se puede describir como código, probablemente no debería existir.",
        p2: "Soy un entusiasta de Kubernetes, aprendiendo activamente C y Go, y leo ampliamente sobre ingeniería de computadores — diseño de sistemas, compiladores, redes. Mantengo herramientas open-source bajo IT-LAB-UAI y contribuyo proyectos personales en GitHub.",
        p3: "También soy un entusiasta de la IA — no un experto, solo alguien genuinamente emocionado por las posibilidades de aplicar nuevos modelos a los problemas cotidianos para hacer la vida un poco mejor. Y cuando no estoy frente a un terminal, probablemente estoy jugando con amigos.",
        highlights: {
          sysadmin: "desarrollador o sysadmin",
          infra: "diseño de infraestructura",
          ansible: "Ansible",
          declarative: "enfoques declarativos",
          kubernetes: "entusiasta de Kubernetes",
          c: "C",
          go: "Go",
          itlab: "IT-LAB-UAI",
          ai: "entusiasta de la IA",
          gaming: "jugando con amigos",
        },
      },
      courses: {
        title: "Cursos",
      },
    },
    courses: {
      back: "Volver",
      tics320: {
        label: "TICS320",
        title: "Bases de Datos",
        description:
          "Una introducción a las bases de datos y la gestión de datos — cubriendo modelos relacionales, diseño de consultas, normalización y una visión general de los enfoques no relacionales. Esta página reúne clases, materiales de referencia y las sesiones de practicum que realizo semanalmente para el curso.",
        lectures: {
          title: "Clases",
          description: "Diapositivas y materiales de las clases del curso.",
          empty: "Nada aquí todavía.",
        },
        materials: {
          title: "Materiales",
          description: "Lecturas, referencias y recursos complementarios.",
        },
        practicum: {
          title: "Practicum",
          description: "Sesiones semanales que dirijo con ejercicios, ejemplos y problemas prácticos.",
          empty: "Nada aquí todavía.",
          openSlides: "Abrir diapositivas",
        },
      },
    },
    materialItems: [
      {
        title: "PostgreSQL",
        description:
          "El motor de base de datos relacional que usamos en este curso. PostgreSQL es un potente sistema de base de datos objeto-relacional de código abierto con más de 35 años de desarrollo activo. Lo elegimos porque es el estándar de la industria para cargas de trabajo relacionales, tiene excelente conformidad con SQL y es gratuito para usar localmente o en la nube.",
        href: "https://www.postgresql.org/",
        label: "postgresql.org",
      },
      {
        title: "Supabase",
        description:
          "Si no quieres instalar PostgreSQL localmente, Supabase ofrece una instancia PostgreSQL gratuita que puedes crear en minutos. También incluye un editor SQL integrado para ejecutar consultas directamente desde el navegador, sin necesidad de un cliente.",
        href: "https://supabase.com/",
        label: "supabase.com",
      },
      {
        title: "pgAdmin",
        description:
          "El cliente de escritorio más popular para PostgreSQL. pgAdmin te ofrece una interfaz visual para gestionar bases de datos, explorar tablas y ejecutar consultas. Útil cuando quieres más que una terminal pero prefieres trabajar directamente contra una instancia local o remota.",
        href: "https://www.pgadmin.org/",
        label: "pgadmin.org",
      },
    ],
    practicumItems: [
      {
        number: 1,
        title: "Diseño y Modelado de Bases de Datos",
        description:
          "Diagramas ER, modelos lógicos, cardinalidad y cómo pensar al diseñar una base de datos desde cero. Incluye un ejercicio práctico.",
        href: "/presentations/tics320/practicum-1/index.html",
      },
    ],
    courseList: [
      {
        code: "TICS320",
        name: "Bases de Datos",
        description: "Bases de datos relacionales y no relacionales, diseño de consultas y modelado de datos.",
        slug: "tics320",
      },
    ],
  },
} as const;

export type Language = keyof typeof translations;
export type Translations = typeof translations.en;
