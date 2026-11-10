import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        setOpen(false);
        const section = document.getElementById(id);

        if (location.pathname !== "/") {
            navigate("/", { state: { section: id } });
        } else if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const links = [
        { id: "inicio", label: "Inicio" },
        { id: "proyectos", label: "Proyectos" },
        { id: "contacto", label: "Contacto" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-primario/80 shadow-lg backdrop-blur-md">
            <div className="flex h-16 items-center justify-between px-6">
                <Link to="/" className="group flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-indigo-300">
                        Tecn. Miguel Durán
                    </span>
                    <span className="hidden text-sm font-light text-white/60 sm:inline">
                        · Desarrollador
                    </span>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="nav-link"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                <button
                    type="button"
                    className="text-sm font-medium text-white/80 md:hidden"
                    aria-expanded={open}
                    aria-label={open ? "Cerrar menú" : "Abrir menú"}
                    onClick={() => setOpen((value) => !value)}
                >
                    {open ? "Cerrar" : "Menú"}
                </button>
            </div>

            {open && (
                <nav className="flex flex-col gap-3 border-t border-white/10 px-6 py-4 md:hidden">
                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="nav-link w-fit"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>
            )}
        </header>
    );
}
