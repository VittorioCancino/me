"use client";

import { useLanguage } from "@lib/i18n/context";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#21262d] bg-[#0d1117] p-0.5 text-xs font-semibold">
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-3 py-1 uppercase tracking-widest transition-colors ${
            lang === l
              ? "bg-[#7c3aed] text-white"
              : "text-[#848d97] hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
