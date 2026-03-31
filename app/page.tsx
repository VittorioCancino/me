"use client";

import { Building2, MapPin, Mail, GitBranch, Briefcase, Users, BookOpen, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@lib/i18n/context";

const contact = [
  { icon: Briefcase, label: "LinkedIn",                  href: "https://www.linkedin.com/in/vittorio-cancino-6163a5347/" },
  { icon: GitBranch, label: "VittorioCancino",           href: "https://github.com/VittorioCancino" },
  { icon: Building2, label: "Universidad Adolfo Ibáñez", href: "https://www.uai.cl/" },
  { icon: MapPin,    label: "Viña del Mar, Chile" },
  { icon: Mail,      label: "cancinovittorio@gmail.com" },
];

const tags = ["Linux", "Kubernetes", "Ansible", "Declarative Infra", "CI/CD", "TypeScript", "Go", "C", "AI Enthusiast", "Automated Deployments"];

export default function Home() {
  const { t } = useLanguage();
  const w = t.home.whoami;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex gap-6">

        {/* ── Sidebar ── */}
        <aside className="w-72 shrink-0">
          <div className="rounded-2xl border border-[#21262d] bg-[#161b22] overflow-hidden">

            <div className="relative h-48 w-full bg-[#0d1117]">
              <Image src="/avatar.jpg" alt="Vittorio Cancino" fill priority className="object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#161b22] to-transparent" />
            </div>

            <div className="px-6 pb-6 -mt-6 relative">
              <h1 className="text-xl font-bold text-white leading-tight">Vittorio Cancino Gonzalez</h1>
              <p className="text-sm font-medium text-[#7c3aed] mt-0.5 mb-1">{t.sidebar.role}</p>
              <p className="text-xs text-[#848d97] mb-5">{t.sidebar.pronouns}</p>

              <p className="text-sm text-[#c9d1d9] leading-relaxed mb-6 border-l-2 border-[#7c3aed] pl-3">
                {t.sidebar.bio}
              </p>

              <div className="flex items-center gap-3 mb-6 text-xs text-[#848d97]">
                <Users size={13} className="text-[#7c3aed]" />
                <span><span className="font-semibold text-white">7</span> {t.sidebar.followers}</span>
                <span>·</span>
                <span><span className="font-semibold text-white">12</span> {t.sidebar.following}</span>
              </div>

              <div className="border-t border-[#21262d] mb-6" />

              <ul className="space-y-3">
                {contact.map(({ icon: Icon, label, href }) => (
                  <li key={label} className="flex items-center gap-3 text-xs text-[#c9d1d9]">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/20 text-[#7c3aed]">
                      <Icon size={13} />
                    </span>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-[#a78bfa] hover:underline transition-colors">
                        {label}
                      </a>
                    ) : label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="min-w-0 flex-1 space-y-6">

          {/* Who am I */}
          <section className="rounded-2xl border border-[#21262d] bg-[#161b22] px-7 py-6">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">
              {w.title}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-[#c9d1d9]">
              {w.p1.split(w.highlights.sysadmin)[0]}
              <span className="text-white font-medium">{w.highlights.sysadmin}</span>
              {w.p1.split(w.highlights.sysadmin)[1].split(w.highlights.infra)[0]}
              <span className="text-white font-medium">{w.highlights.infra}</span>
              {w.p1.split(w.highlights.infra)[1].split(w.highlights.ansible)[0]}
              <span className="text-white font-medium">{w.highlights.ansible}</span>
              {w.p1.split(w.highlights.ansible)[1].split(w.highlights.declarative)[0]}
              <span className="text-white font-medium">{w.highlights.declarative}</span>
              {w.p1.split(w.highlights.declarative)[1]}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-[#c9d1d9]">
              {w.p2.split(w.highlights.kubernetes)[0]}
              <span className="text-white font-medium">{w.highlights.kubernetes}</span>
              {w.p2.split(w.highlights.kubernetes)[1].split(w.highlights.c)[0]}
              <span className="text-white font-medium">{w.highlights.c}</span>
              {w.p2.split(w.highlights.c)[1].split(w.highlights.go)[0]}
              <span className="text-white font-medium">{w.highlights.go}</span>
              {w.p2.split(w.highlights.go)[1].split(w.highlights.itlab)[0]}
              <span className="text-white font-medium">{w.highlights.itlab}</span>
              {w.p2.split(w.highlights.itlab)[1]}
            </p>
            <p className="mb-6 text-sm leading-relaxed text-[#c9d1d9]">
              {w.p3.split(w.highlights.ai)[0]}
              <span className="text-white font-medium">{w.highlights.ai}</span>
              {w.p3.split(w.highlights.ai)[1].split(w.highlights.gaming)[0]}
              <span className="text-white font-medium">{w.highlights.gaming}</span>
              {w.p3.split(w.highlights.gaming)[1]}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/10 px-3 py-0.5 text-xs text-[#a78bfa]">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Courses */}
          <section className="rounded-2xl border border-[#21262d] bg-[#161b22] px-7 py-6">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">
              {t.home.courses.title}
            </h2>
            <div className="space-y-3">
              {t.courseList.map((course) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="flex items-center gap-4 rounded-xl border border-[#21262d] bg-[#0d1117] px-4 py-3 transition-colors hover:border-[#7c3aed]/50 hover:bg-[#7c3aed]/5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7c3aed]/20 text-[#7c3aed]">
                    <BookOpen size={16} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">
                      {course.code}
                      <span className="ml-2 font-normal text-[#848d97]">— {course.name}</span>
                    </p>
                    <p className="mt-0.5 text-xs text-[#848d97]">{course.description}</p>
                  </div>
                  <ChevronRight size={14} className="shrink-0 text-[#848d97]" />
                </Link>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
