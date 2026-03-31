"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

type Item = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export default function ExpandableList({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <ul className="space-y-2">
      {items.map((item) => {
        const isOpen = open === item.title;

        return (
          <li key={item.title} className="rounded-xl border border-[#21262d] bg-[#0d1117] overflow-hidden">

            {/* Row */}
            <button
              onClick={() => setOpen(isOpen ? null : item.title)}
              className="flex w-full items-center gap-3 px-5 py-3 text-left transition-colors hover:bg-[#7c3aed]/5"
            >
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 text-[#7c3aed]"
              >
                <ChevronDown size={14} />
              </motion.span>

              <span className="flex-1 text-sm font-medium text-white">{item.title}</span>

              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex shrink-0 items-center gap-1 text-xs text-[#7c3aed] transition-colors hover:text-[#a78bfa]"
              >
                {item.label} <ExternalLink size={11} />
              </a>
            </button>

            {/* Expandable body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-[#21262d] px-5 py-4 text-xs leading-relaxed text-[#848d97]">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </li>
        );
      })}
    </ul>
  );
}
