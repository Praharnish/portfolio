"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { navigation } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function scrollToSection(id?: string) {
    if (typeof window === "undefined") return;

    const target = id
      ? document.getElementById(id)
      : document.documentElement;

    if (!target) return;

    if (!id) {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      // Fallback for browsers where smooth scrolling is unreliable
      window.setTimeout(() => {
        if (window.scrollY > 0) {
          window.scrollTo(0, 0);
        }
      }, 700);

      return;
    }

    // Account for a sticky navbar
    const navbarOffset = 90;
    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="mt-20 border-t border-white/10 bg-[#050816]">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-12">
        {/* Main footer content */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <button
                type="button"
                onClick={() => scrollToSection()}
                aria-label="Scroll to top"
                className="inline-block text-xl font-bold tracking-tight text-white transition hover:text-violet-300"
            >
              Harnish Prajapati<span className="text-violet-400">.</span>
            </button>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Software developer passionate about building useful applications,
              exploring new technologies, and turning ideas into reality.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="mb-3 text-sm font-semibold text-white">
              Quick Links
            </p>

            <ul className="flex flex-wrap gap-x-5 gap-y-3">
            {navigation.map((item) => (
                <li key={item.id}>
                <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-slate-400 transition hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:rounded-sm"
                >
                    {item.label}
                </button>
                </li>
            ))}
            </ul>
          </nav>

          {/* Social links */}
          <div>
            <p className="mb-3 text-sm font-semibold text-white">
              Connect
            </p>

            {/* github */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Praharnish"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-violet-400/50 hover:text-white"
              >
                <Image
                src="/icons/github.svg"
                alt=""
                aria-hidden="true"
                width={18}
                height={18}
                className="invert"
                />  
              </a>

              {/* linkedin */}
              <a
                href="https://linkedin.com/in/harnish-prajapati-developer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-violet-400/50 hover:text-white"
              >

                <Image
                src="/icons/linkedin.svg"
                alt=""
                aria-hidden="true"
                width={18}
                height={18}
                className="invert"
                />
              </a>

              {/* email */}
              <a
                href={`mailto:${portfolio.contact.email}`}
                aria-label="Send email"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-violet-400/50 hover:text-white"
              >
                <Image
                src="/icons/mail.svg"
                alt=""
                aria-hidden="true"
                width={18}
                height={18}
                className="invert"
                />
              </a>

              {/* resume */}
              <a
                href="/resume.pdf"
                download="Harnish-Prajapati-Resume.pdf"
                aria-label="Download resume"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-violet-400/50 hover:text-white"
              >
                <Image
                  src="/icons/resume.svg"
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                  className="invert"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Harnish Prajapati. All rights reserved.
          </p>

          <p>
            Designed & built with{" "}
            <span className="font-medium text-violet-300">
              Next.js
            </span>
            {" "}and passion.
          </p>

            <button
            type="button"
            onClick={() => scrollToSection()}
            aria-label="Back to top"
            className="inline-flex w-fit items-center gap-2 transition hover:text-violet-300"
            >
            Back to top
            <ArrowUp size={16} />
            </button>
        </div>
      </div>
    </footer>
  );
}