import { Link, useNavigate, useLocation } from 'react-router-dom';

import inicio from '../../assets/integratorapp/inicio.png';

export default function CalculatorTerminalisCard() {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname !== 'integratorapp') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

    return (
        <div className="group w-80 bg-secundario text-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

            <div className="overflow-hidden">
                <img
                    src={inicio}
                    alt="Presentacion de de Dojo-Core"
                    className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
            </div>

            <div className="p-6 flex flex-col h-64">
                <h1 className="font-bold text-xl mb-3 text-pink-700">
                    Integrator-App
                </h1>

                <p className="text-justify text-white/80 text-sm leading-relaxed mb-4 flex-1">
                    Integrator app es un proyecto escolar que sirve para calcular el area bajo la curva
                    dada por una funcion.
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                    {['React', 'Tailwind', 'Math.js', 'Anime.js'].map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <Link
                    to="integratorapp"
                    onClick={() => scrollToSection('integratorapp')}
                    className="inline-flex items-center gap-1 text-indigo-300 font-medium text-sm hover:text-indigo-200 transition-colors"
                >
                    Ver documentación del sitio
                </Link>
            </div>
        </div>
    )
}