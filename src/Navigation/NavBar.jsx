import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-primario w-full h-16 flex items-center justify-between px-6 shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
            <Link to="/" className="flex items-center gap-2 group">
                <span className="text-white font-bold text-xl tracking-tight group-hover:text-indigo-300 transition-colors">
                    Tecn. Miguel Durán
                </span>
                <span className="text-white/60 font-light text-sm hidden sm:inline">
                    · Desarrollador
                </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
                <button
                    onClick={() => scrollToSection('inicio')}
                    className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
                >
                    Inicio
                </button>
                <button
                    onClick={() => scrollToSection('proyectos')}
                    className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
                >
                    Proyectos
                </button>
                <button
                    onClick={() => scrollToSection('contacto')}
                    className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
                >
                    Contacto
                </button>
            </nav>
        </header>
    );
}