"use client";

import {
  Code2,
  Monitor,
  Server,
  Database,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { SkillCategoryIcon } from "@/types/skills";
import { skills } from "@/data/skills";

const categoryIcons: Record<SkillCategoryIcon, LucideIcon> = {
  code: Code2,
  monitor: Monitor,
  server: Server,
  database: Database,
  tools: Wrench,
  mobile: Smartphone,
};

export default function Skills() {
  return (
    <section id="skills" className="mt-20 scroll-mt-24 space-y-6">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
          {skills.label}
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {skills.title}
        </h2>

        <p className="mt-3 text-base leading-7 text-slate-300 sm:text-lg">
          {skills.description}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skills.categories.map((category) => {
          const Icon = categoryIcons[category.icon];

          return (
            <div
              key={category.id}
              className="group h-full rounded-2xl border border-slate-700/70 bg-slate-950/40 p-5 text-left transition hover:border-violet-400/50 hover:bg-slate-900/80"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border"
                  style={{
                    color: category.accentColor,
                    borderColor: `${category.accentColor}80`,
                    backgroundColor: `${category.accentColor}18`,
                  }}
                >
                  <Icon size={23} aria-hidden="true" />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-white">
                      {category.name}
                    </h3>

                    <span className="text-xs text-slate-400">
                      {category.skills.length} technologies
                    </span>
                  </div>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
