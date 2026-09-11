import { Link } from 'react-router-dom';

export default function NavBar() {
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
                <Link to="/" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                    Inicio
                </Link>
                <Link to="/proyectos" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                    Proyectos
                </Link>
                <Link to="/contacto" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                    Contacto
                </Link>
            </nav>
        </header>
    )
}