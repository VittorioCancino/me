export const translations = {
  en: {
    sidebar: {
      role: "Software Developer · Student",
      pronouns: "he/him",
      bio: "Turning caffeine into code and dreams into reality",
    },
    home: {
      whoami: {
        title: "Who am I",
        p1: "I'm a software developer and educator based in Viña del Mar, working towards a future as a developer or sysadmin. My main focus is infrastructure design — building systems that provision, deploy, and tear themselves down without anyone having to babysit them. I've been working with Linux servers for over three years, rely heavily on Ansible for system configuration, and have a strong preference for declarative approaches: if it can't be described as code, it probably shouldn't exist.",
        p2: "I'm a Kubernetes enjoyer, actively learning C and Go, and I read broadly across computer engineering — systems design, compilers, networking. I maintain open-source tooling under IT-LAB-UAI and contribute personal projects on GitHub.",
        p3: "I'm also an AI enthusiast — not an expert, just someone genuinely excited by the possibilities of applying new models to everyday problems and making life a little better.",
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
          description:
            "Weekly sessions I run with exercises, examples, and practice problems.",
          empty: "Nothing here yet.",
          openSlides: "Open slides",
        },
        exercises: {
          title: "Exercises",
          description:
            "Practice problems with solutions. Work through them on your own first.",
          empty: "Nothing here yet.",
          openExercise: "Open exercise",
          openSolution: "Open solution",
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
      {
        title:
          "Database Design for Mere Mortals (4th ed.) — Michael J. Hernandez",
        description:
          "My personal recommendation for this course. A practical, hands-on guide to relational database design that doesn't assume prior experience. Hernandez walks you through the full design process — from understanding requirements to building a clean, normalised schema — at a pace that builds real intuition. The level of depth matches what we cover in class, and the examples are concrete enough to apply immediately.",
        href: "https://www.amazon.com/dp/0136788041",
        label: "amazon.com",
      },
      {
        title: "Fundamentals of Database Systems (7th ed.) — Elmasri & Navathe",
        description:
          "The standard academic reference for database systems. This book goes well beyond what this course covers — deep into the theory of data modelling, relational algebra, query processing, indexing, and transaction management. Treat it as the definitive source if you want to understand what is actually happening under the hood, or if you plan to go further into databases after this course.",
        href: "https://www.amazon.com/dp/0136086209",
        label: "amazon.com",
      },
      {
        title: "Postgres Sample Databases — Neon",
        description:
          "A collection of ready-to-use PostgreSQL databases with SQL dumps you can load locally or into Supabase. Includes well-known datasets like Northwind, Chinook, and others — good for practising queries, joins, and aggregations against realistic schemas without having to invent data yourself. Note that some of these dumps are large enough to exceed Supabase's free tier storage limit, so not all of them will fit there. If you run into that, the simplest fix is to load them into a local PostgreSQL installation instead.",
        href: "https://github.com/neondatabase/postgres-sample-dbs",
        label: "github.com",
      },
    ],
    practicumItems: [
      {
        number: 1,
        title: "Database Design & Modeling",
        description:
          "ER diagrams, logical models, cardinality, and how to think when designing a database from scratch. Includes a hands-on exercise.",
        href: "/presentations/tics320/practicums/practicum-1/index.html",
      },
      {
        number: 2,
        title: "From ER to Relational Models & Relational Algebra",
        description:
          "Transition from the ER model to the relational model, map entities and relationships into relations, and begin working with the core ideas of relational algebra.",
        href: "/presentations/tics320/practicums/practicum-2/index.html",
      },
      {
        number: 3,
        title: "Introduction to SQL",
        description:
          "First contact with SQL: query structure, basic clauses, and how relational ideas turn into real database questions.",
        href: "/presentations/tics320/practicums/practicum-3/index.html",
      },
    ],
    exerciseItems: [
      {
        number: 1,
        title: "MarBrisa Disco — ER Design",
        description:
          "Design an ER diagram for a disco that sells tickets, runs themed events, and has an in-house bar where customers can order drinks.",
        href: "/presentations/tics320/exercises/exercise-1/index.html",
        solutionHref:
          "/presentations/tics320/exercises/exercise-1/er-solution.html",
      },
      {
        number: 2,
        title: "ER Diagram Practice",
        description:
          "Guided ER modeling practice with progressively harder case studies. This is an exercise deck rather than a lecture session.",
        href: "/presentations/tics320/exercises/exercise-2/index.html",
        solutionHref:
          "/presentations/tics320/exercises/exercise-2/er-gallery.html?case=university",
      },
      {
        number: 3,
        title: "Relational Algebra Exercises",
        description:
          "Practice the core operators of relational algebra and build query expressions from a shared schema.",
        href: "/presentations/tics320/exercises/exercise-3/index.html",
        solutionHref:
          "/presentations/tics320/exercises/exercise-3/solutions-gallery.html?case=sailors",
      },
      {
        number: 4,
        title: "SQL Exercises",
        description:
          "Practice both basic and advanced SQL with a wrapper that includes the introductory query deck and the grouped-query exercise deck.",
        href: "/presentations/tics320/exercises/sql-exercises/index.html",
        solutionHref:
          "/presentations/tics320/exercises/sql-exercises/solutions-gallery.html?case=basic",
      },
    ],
    courseList: [
      {
        code: "TICS320",
        name: "Databases",
        description:
          "Relational and non-relational databases, query design, and data modelling.",
        slug: "tics320",
      },
    ],
  },

  es: {
    sidebar: {
      role: "Desarrollador de Software · Estudiante",
      pronouns: "él",
      bio: "Convirtiendo cafeína en código y sueños en realidad",
    },
    home: {
      whoami: {
        title: "¿Quién soy?",
        p1: "Soy un desarrollador de software y educador basado en Viña del Mar, con proyección hacia un futuro como desarrollador o sysadmin. Mi enfoque principal es el diseño de infraestructura — construir sistemas que se aprovisionen, desplieguen y eliminen solos sin que nadie tenga que supervisarlos. Llevo más de tres años trabajando con servidores Linux, uso ampliamente Ansible para la configuración de sistemas, y tengo una fuerte preferencia por enfoques declarativos: si no se puede describir como código, probablemente no debería existir.",
        p2: "Soy un entusiasta de Kubernetes, aprendiendo activamente C y Go, y leo ampliamente sobre ingeniería de computadores — diseño de sistemas, compiladores, redes. Mantengo herramientas open-source bajo IT-LAB-UAI y contribuyo proyectos personales en GitHub.",
        p3: "También soy un entusiasta de la IA — no un experto, solo alguien genuinamente emocionado por las posibilidades de aplicar nuevos modelos a los problemas cotidianos para hacer la vida un poco mejor.",
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
          description:
            "Sesiones semanales que dirijo con ejercicios, ejemplos y problemas prácticos.",
          empty: "Nada aquí todavía.",
          openSlides: "Abrir diapositivas",
        },
        exercises: {
          title: "Ejercicios",
          description:
            "Problemas prácticos con soluciones. Intenta resolverlos por tu cuenta primero.",
          empty: "Nada aquí todavía.",
          openExercise: "Abrir ejercicio",
          openSolution: "Abrir solución",
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
      {
        title:
          "Database Design for Mere Mortals (4ª ed.) — Michael J. Hernandez",
        description:
          "Mi recomendación personal para este curso. Una guía práctica y directa sobre diseño de bases de datos relacionales que no asume experiencia previa. Hernandez guía al lector por todo el proceso de diseño — desde entender los requisitos hasta construir un esquema limpio y normalizado — a un ritmo que desarrolla intuición real. El nivel de profundidad se alinea con lo que vemos en clases, y los ejemplos son concretos y aplicables de inmediato.",
        href: "https://www.amazon.com/dp/0136788041",
        label: "amazon.com",
      },
      {
        title: "Fundamentals of Database Systems (7ª ed.) — Elmasri & Navathe",
        description:
          "La referencia académica estándar para sistemas de bases de datos. Este libro va mucho más allá de lo que cubre este curso — profundiza en la teoría del modelado de datos, álgebra relacional, procesamiento de consultas, indexación y gestión de transacciones. Úsalo como fuente definitiva si quieres entender qué ocurre realmente bajo el capó, o si piensas profundizar en bases de datos después de este curso.",
        href: "https://www.amazon.com/dp/0136086209",
        label: "amazon.com",
      },
      {
        title: "Postgres Sample Databases — Neon",
        description:
          "Una colección de bases de datos PostgreSQL listas para usar, con dumps SQL que puedes cargar localmente o en Supabase. Incluye conjuntos de datos conocidos como Northwind, Chinook y otros — ideales para practicar consultas, joins y agregaciones sobre esquemas realistas sin tener que inventar datos. Ten en cuenta que algunos de estos dumps son lo suficientemente grandes como para superar el límite de almacenamiento del plan gratuito de Supabase, por lo que no todos cabrán ahí. Si te ocurre eso, la solución más simple es cargarlos en una instalación local de PostgreSQL.",
        href: "https://github.com/neondatabase/postgres-sample-dbs",
        label: "github.com",
      },
    ],
    practicumItems: [
      {
        number: 1,
        title: "Diseño y Modelado de Bases de Datos",
        description:
          "Diagramas ER, modelos lógicos, cardinalidad y cómo pensar al diseñar una base de datos desde cero. Incluye un ejercicio práctico.",
        href: "/presentations/tics320/practicums/practicum-1/index.html",
      },
      {
        number: 2,
        title: "Del Modelo ER al Modelo Relacional y Álgebra Relacional",
        description:
          "Transición desde el modelo ER al modelo relacional, mapeo de entidades y relaciones a relaciones, e introducción a las ideas fundamentales del álgebra relacional.",
        href: "/presentations/tics320/practicums/practicum-2/index.html",
      },
      {
        number: 3,
        title: "Introducción a SQL",
        description:
          "Primer contacto con SQL: estructura de consultas, cláusulas básicas y cómo las ideas relacionales se convierten en preguntas reales a la base de datos.",
        href: "/presentations/tics320/practicums/practicum-3/index.html",
      },
    ],
    exerciseItems: [
      {
        number: 1,
        title: "Disco MarBrisa — Diseño ER",
        description:
          "Diseña un diagrama ER para una discoteca que vende entradas, organiza eventos temáticos y tiene un bar donde los clientes pueden pedir bebidas.",
        href: "/presentations/tics320/exercises/exercise-1/index.html",
        solutionHref:
          "/presentations/tics320/exercises/exercise-1/er-solution.html",
      },
      {
        number: 2,
        title: "Práctica de Diagramas ER",
        description:
          "Práctica guiada de modelado ER con casos de estudio de dificultad progresiva. Este material funciona mejor como ejercicio que como sesión expositiva.",
        href: "/presentations/tics320/exercises/exercise-2/index.html",
        solutionHref:
          "/presentations/tics320/exercises/exercise-2/er-gallery.html?case=university",
      },
      {
        number: 3,
        title: "Ejercicios de Álgebra Relacional",
        description:
          "Practica los operadores centrales del álgebra relacional y construye expresiones de consulta sobre un esquema compartido.",
        href: "/presentations/tics320/exercises/exercise-3/index.html",
        solutionHref:
          "/presentations/tics320/exercises/exercise-3/solutions-gallery.html?case=sailors",
      },
      {
        number: 4,
        title: "Ejercicios de SQL",
        description:
          "Practica SQL básico y avanzado con un contenedor que incluye el deck introductorio de consultas y el deck de ejercicios de agrupación.",
        href: "/presentations/tics320/exercises/sql-exercises/index.html",
        solutionHref:
          "/presentations/tics320/exercises/sql-exercises/solutions-gallery.html?case=basic",
      },
    ],
    courseList: [
      {
        code: "TICS320",
        name: "Bases de Datos",
        description:
          "Bases de datos relacionales y no relacionales, diseño de consultas y modelado de datos.",
        slug: "tics320",
      },
    ],
  },
} as const;

export type Language = keyof typeof translations;
export type Translations = (typeof translations)[Language];
