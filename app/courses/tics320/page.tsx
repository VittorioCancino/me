"use client";

import Link from "next/link";
import { ChevronLeft, BookOpen, Presentation, FolderOpen, Users, ExternalLink } from "lucide-react";
import ExpandableList from "./ExpandableList";
import { useLanguage } from "@lib/i18n/context";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function TICS320() {
  const { t } = useLanguage();
  const c = t.courses.tics320;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">

      <Link href="/" className="mb-8 inline-flex items-center gap-1 text-xs text-[#848d97] transition-colors hover:text-[#a78bfa]">
        <ChevronLeft size={13} /> {t.courses.back}
      </Link>

      <div className="mb-4 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7c3aed]/20 text-[#7c3aed]">
          <BookOpen size={22} />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">{c.label}</p>
          <h1 className="text-2xl font-bold text-white">{c.title}</h1>
        </div>
      </div>

      <p className="mb-10 text-sm leading-relaxed text-[#848d97]">{c.description}</p>

      <div className="space-y-4">

        {/* Lectures */}
        <div className="rounded-2xl border border-[#21262d] bg-[#161b22] px-7 py-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7c3aed]/20 text-[#7c3aed]">
              <Presentation size={15} />
            </span>
            <h2 className="text-sm font-semibold text-white">{c.lectures.title}</h2>
          </div>
          <p className="mb-4 text-xs text-[#848d97]">{c.lectures.description}</p>
          <p className="text-xs italic text-[#848d97]">{c.lectures.empty}</p>
        </div>

        {/* Materials */}
        <div className="rounded-2xl border border-[#21262d] bg-[#161b22] px-7 py-6">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7c3aed]/20 text-[#7c3aed]">
              <FolderOpen size={15} />
            </span>
            <h2 className="text-sm font-semibold text-white">{c.materials.title}</h2>
          </div>
          <p className="mb-4 text-xs text-[#848d97]">{c.materials.description}</p>
          <ExpandableList items={t.materialItems} />
        </div>

        {/* Practicum */}
        <div className="rounded-2xl border border-[#21262d] bg-[#161b22] px-7 py-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7c3aed]/20 text-[#7c3aed]">
              <Users size={15} />
            </span>
            <h2 className="text-sm font-semibold text-white">{c.practicum.title}</h2>
          </div>
          <p className="mb-4 text-xs text-[#848d97]">{c.practicum.description}</p>
          <ul className="space-y-2">
            {t.practicumItems.map((item) => (
              <li key={item.number} className="rounded-xl border border-[#21262d] bg-[#0d1117] px-5 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/20 text-[#7c3aed] text-xs font-bold">
                    {item.number}
                  </span>
                  <span className="flex-1 text-sm font-medium text-white">{item.title}</span>
                  <a
                    href={`${BASE}${item.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center gap-1 text-xs text-[#7c3aed] transition-colors hover:text-[#a78bfa]"
                  >
                    {c.practicum.openSlides} <ExternalLink size={11} />
                  </a>
                </div>
                <p className="mt-1.5 pl-9 text-xs text-[#848d97]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Exercises */}
        <div className="rounded-2xl border border-[#21262d] bg-[#161b22] px-7 py-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7c3aed]/20 text-[#7c3aed]">
              <BookOpen size={15} />
            </span>
            <h2 className="text-sm font-semibold text-white">{c.exercises.title}</h2>
          </div>
          <p className="mb-4 text-xs text-[#848d97]">{c.exercises.description}</p>
          <ul className="space-y-2">
            {t.exerciseItems.map((item) => (
              <li key={item.number} className="rounded-xl border border-[#21262d] bg-[#0d1117] px-5 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/20 text-[#7c3aed] text-xs font-bold">
                    {item.number}
                  </span>
                  <span className="flex-1 text-sm font-medium text-white">{item.title}</span>
                  <div className="flex shrink-0 items-center gap-3">
                    <a
                      href={`${BASE}${item.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-[#7c3aed] transition-colors hover:text-[#a78bfa]"
                    >
                      {c.exercises.openExercise} <ExternalLink size={11} />
                    </a>
                    {item.solutionHref ? (
                      <a
                        href={`${BASE}${item.solutionHref}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-[#848d97] transition-colors hover:text-[#a78bfa]"
                      >
                        {c.exercises.openSolution} <ExternalLink size={11} />
                      </a>
                    ) : null}
                  </div>
                </div>
                <p className="mt-1.5 pl-9 text-xs text-[#848d97]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
