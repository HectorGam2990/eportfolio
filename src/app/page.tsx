export default function Home() {
  const skillGroups = [
    {
      title: "Lenguajes",
      items: ["PHP", "JavaScript (ES6+)", "Python", "SQL"],
    },
    {
      title: "Frameworks",
      items: ["Laravel", "Bootstrap", "React (básico)", "Next.js (básico)"],
    },
    {
      title: "Frontend",
      items: ["HTML5", "CSS3", "Blade Templates", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: ["Arquitectura MVC", "Eloquent ORM", "Autenticación", "Validaciones"],
    },
    {
      title: "Bases de Datos",
      items: ["MySQL", "SQLite"],
    },
    {
      title: "Herramientas",
      items: ["Git", "GitHub", "Laragon", "Visual Studio Code"],
    },
    {
      title: "Otros",
      items: ["REST APIs", "AJAX", "jQuery (básico)", "Seguridad web básica"],
    },
  ];

  const projects = [
    {
      title: "Plataforma Web de Bienes Raíces",
      subtitle: "Proyecto personal",
      description:
        "Plataforma inmobiliaria centrada en experiencia de usuario con interfaz moderna y navegación clara.",
      stack: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Despliegue en producción (Netlify).",
        "Estructura pensada para escalar secciones y listados.",
      ],
      repo: "https://github.com/HectorGam2990/bienesraices-fin",
    },
    {
      title: "Ayuntamiento de Jamapa",
      subtitle: "Sitio web institucional",
      description:
        "Sitio informativo para ciudadanía con diseño responsivo y contenido municipal organizado.",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      highlights: [
        "Diseño adaptable a móvil y desktop.",
        "Estructuración de secciones y módulos informativos.",
      ],
      repo: "https://github.com/HectorGam2990/jamapa-web",
    },
    {
      title: "Sistema de Gestión de Trámites Municipales",
      subtitle: "Laravel / MySQL",
      description:
        "Sistema administrativo interno con autenticación, control de accesos y seguimiento de estatus.",
      stack: ["Laravel", "MySQL", "PHP", "Blade"],
      highlights: [
        "CRUD de ciudadanos, tipos de trámite y solicitudes.",
        "Generación de folios secuenciales y control de estados.",
      ],
      repo: "https://github.com/HectorGam2990/tramites-municipales-laravel",
    },
    {
      title: "Detección de Lenguaje de Señas",
      subtitle: "Python / Visión por computadora",
      description:
        "Aplicación para detección de lenguaje de señas con procesamiento de video en tiempo real.",
      stack: ["Python", "Computer Vision"],
      highlights: [
        "Análisis de datos en tiempo real.",
        "Base para subtitulado y accesibilidad.",
      ],
      repo: "https://github.com/HectorGam2990/sign-language-subtitles-2hands",
    },
  ];

  const certifications = [
    "Microsoft Office Specialist Expert – Excel 2016",
    "Cisco Networking Academy – Introduction to Networks",
    "Cisco Networking Academy – Switching, Routing and Wireless Essentials",
    "Cisco Networking Academy – Enterprise Networking, Security and Automation",
    "Cisco Networking Academy – CyberOps Associate",
    "Fundamentos de la gestión de proyectos – Google (Coursera)",
    "Introducción a la gestión ágil de proyectos – Tec de Monterrey (Coursera)",
    "Project Management – Tec de Monterrey (Coursera)",
    "Project Management: Control using the Earned Value and Risk (Coursera)",
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute -top-32 right-[-8%] h-72 w-72 rounded-full bg-[#ffd7c2] opacity-70 blur-3xl float-slow" />
      <div className="absolute top-[35%] -left-20 h-64 w-64 rounded-full bg-[#b5efe2] opacity-70 blur-3xl float-slow" />
      <div className="absolute bottom-[-12%] right-[15%] h-80 w-80 rounded-full bg-[#f1c4b2] opacity-60 blur-3xl float-slow" />

      <header className="sticky top-0 z-20 border-b border-stroke bg-[#f6f1e9]/70 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-heading text-lg tracking-[0.22em] text-accent">
            HS
          </div>
          <div className="hidden gap-6 text-sm font-medium text-muted md:flex">
            <a href="#inicio" className="hover:text-accent no-underline">
              Inicio
            </a>
            <a href="#proyectos" className="hover:text-accent no-underline">
              Proyectos
            </a>
            <a href="#habilidades" className="hover:text-accent no-underline">
              Habilidades
            </a>
            <a href="#experiencia" className="hover:text-accent no-underline">
              Experiencia
            </a>
            <a href="#contacto" className="hover:text-accent no-underline">
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section
          id="inicio"
          className="section mx-auto w-full max-w-6xl px-6 pt-4 md:pt-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="fade-up">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-accent">
                E-Portfolio 2026
              </p>
              <h1 className="font-heading mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Héctor Alejandro Salazar Gamboa
              </h1>
              <p className="mt-4 text-xl text-muted">
                Desarrollador Web / Full Stack Jr
              </p>
              <p className="mt-6 max-w-xl text-base text-muted">
                Egresado de Ingeniería en Diseño de Software y Redes con
                experiencia en sistemas administrativos, sitios institucionales
                y plataformas comerciales. Enfocado en construir interfaces
                claras, flujos sólidos y soluciones web listas para producción.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <span className="chip">Boca del Río, Veracruz, México</span>
                <a className="chip no-underline" href="tel:2292650824">
                  229 265 0824
                </a>
                <a
                  className="chip no-underline"
                  href="mailto:hectorhsg2990@gmail.com"
                >
                  hectorhsg2990@gmail.com
                </a>
                <a
                  className="chip no-underline"
                  href="https://github.com/HectorGam2990"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub / HectorGam2990
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  className="btn-primary rounded-full px-6 py-3 text-sm font-semibold no-underline"
                  href="#proyectos"
                >
                  Ver proyectos
                </a>
                <a
                  className="btn-ghost rounded-full px-6 py-3 text-sm font-semibold no-underline"
                  href="#contacto"
                >
                  Contactar
                </a>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 shadow-soft">
              <h2 className="font-heading text-xl font-semibold">
                Resumen profesional
              </h2>
              <p className="mt-4 text-sm text-muted">
                Desarrollo aplicaciones web con Laravel, MySQL, HTML, CSS,
                JavaScript, Bootstrap y Tailwind CSS. He creado sistemas de
                gestión de trámites con autenticación y control de estatus, así
                como proyectos institucionales y comerciales en producción.
              </p>
              <div className="mt-6 space-y-4 text-sm text-muted">
                <div className="rounded-2xl border border-stroke bg-white/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    Enfoque
                  </p>
                  <p className="mt-2">
                    Experiencia en React, Next.js y Python para procesamiento de
                    datos y visión por computadora.
                  </p>
                </div>
                <div className="rounded-2xl border border-stroke bg-white/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    Idiomas
                  </p>
                  <p className="mt-2">Español (nativo) · Inglés (C1)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="habilidades" className="section mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-accent">Habilidades</p>
              <h2 className="font-heading mt-2 text-3xl font-semibold">
                Stack técnico
              </h2>
            </div>
            <p className="max-w-lg text-sm text-muted">
              Conocimiento práctico en backend, frontend y bases de datos para
              construir productos completos.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-card rounded-2xl border border-stroke p-6 shadow-soft"
              >
                <h3 className="font-heading text-lg font-semibold">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="section mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-accent">Proyectos</p>
              <h2 className="font-heading mt-2 text-3xl font-semibold">
                Selección destacada
              </h2>
            </div>
            <p className="max-w-lg text-sm text-muted">
              Cuatro proyectos completos que reflejan mis habilidades en
              desarrollo web, sistemas administrativos y visión por computadora.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="bg-card flex h-full flex-col justify-between rounded-3xl border border-stroke p-6 shadow-soft"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    {project.subtitle}
                  </p>
                  <h3 className="font-heading mt-3 text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent no-underline"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositorio
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="section mx-auto w-full max-w-6xl px-6">
          <div className="bg-card rounded-3xl border border-stroke p-8 shadow-soft">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold text-accent">Experiencia</p>
                <h2 className="font-heading mt-2 text-3xl font-semibold">
                  Enfoque profesional
                </h2>
              </div>
              <p className="max-w-lg text-sm text-muted">
                Desarrollo soluciones orientadas a usuario, con backend sólido y
                frontend responsivo.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-stroke bg-white/70 p-6">
                <h3 className="font-heading text-lg font-semibold">
                  Sistemas administrativos
                </h3>
                <p className="mt-3 text-sm text-muted">
                  Experiencia con autenticación, control de accesos, flujo de
                  estatus y generación de folios.
                </p>
              </div>
              <div className="rounded-2xl border border-stroke bg-white/70 p-6">
                <h3 className="font-heading text-lg font-semibold">
                  Sitios institucionales
                </h3>
                <p className="mt-3 text-sm text-muted">
                  Implementación de interfaces informativas con contenido
                  estructurado para comunicación pública.
                </p>
              </div>
              <div className="rounded-2xl border border-stroke bg-white/70 p-6">
                <h3 className="font-heading text-lg font-semibold">
                  Plataformas comerciales
                </h3>
                <p className="mt-3 text-sm text-muted">
                  Proyectos enfocados en experiencia de usuario, navegación clara
                  y despliegue en producción.
                </p>
              </div>
              <div className="rounded-2xl border border-stroke bg-white/70 p-6">
                <h3 className="font-heading text-lg font-semibold">
                  Visión por computadora
                </h3>
                <p className="mt-3 text-sm text-muted">
                  Procesamiento de video en tiempo real para detección de gestos
                  y accesibilidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-card rounded-3xl border border-stroke p-8 shadow-soft">
              <p className="text-sm font-semibold text-accent">Educación</p>
              <h2 className="font-heading mt-2 text-2xl font-semibold">
                Ingeniería en Diseño de Software y Redes
              </h2>
              <p className="mt-2 text-sm text-muted">
                Universidad del Valle de México (UVM) · 2022 – 2025
              </p>
              <p className="mt-4 text-sm text-muted">
                Estudios concluidos; título profesional pagado y en proceso
                administrativo de entrega (estimado: agosto 2026).
              </p>
            </div>
            <div className="bg-card rounded-3xl border border-stroke p-8 shadow-soft">
              <p className="text-sm font-semibold text-accent">Certificaciones</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {certifications.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contacto" className="section mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="glass rounded-3xl p-8 shadow-soft">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold text-accent">Contacto</p>
                <h2 className="font-heading mt-2 text-3xl font-semibold">
                  ¿Trabajamos juntos?
                </h2>
                <p className="mt-3 text-sm text-muted">
                  Disponible para proyectos web, mantenimiento de sistemas y
                  colaboración en productos digitales.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  className="btn-primary rounded-full px-6 py-3 text-sm font-semibold no-underline"
                  href="mailto:hectorhsg2990@gmail.com"
                >
                  Enviar correo
                </a>
                <a
                  className="btn-ghost rounded-full px-6 py-3 text-sm font-semibold no-underline"
                  href="tel:2292650824"
                >
                  Llamar
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
