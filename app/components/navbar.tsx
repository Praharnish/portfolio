import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-4 z-50 mb-10 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-[0_0_30px_rgba(128,90,213,0.15)] backdrop-blur-xl">
        <Link 
            href="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-lg font-semibold tracking-[0.15em] text-white">
            HARNISH PRAJAPATI
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
            About
            </a>
            <a href="#career" className="transition hover:text-white">
            Career
            </a>
            <a href="#experience" className="transition hover:text-white">
            Experience
            </a>
            <a href="#skills" className="transition hover:text-white">
            Skills
            </a>
            <a href="#projects" className="transition hover:text-white">
            Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
            Contact
            </a>
        </nav>
        </header>
    );
}