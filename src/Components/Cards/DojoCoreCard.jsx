import { Link, useNavigate, useLocation } from 'react-router-dom';

import login from '../../assets/dojocore/login.png';

export default function DojoCoreCard() {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname !== 'dojocore') {
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
                    src={login}
                    alt="Login de Dojo-Core"
                    className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
            </div>

            <div className="p-6 flex flex-col h-64">
                <h1 className="font-bold text-xl mb-3">
                    Dojo-<span className="text-indigo-400">Core</span>
                </h1>

                <p className="text-justify text-white/80 text-sm leading-relaxed mb-4 flex-1">
                    Dojo-Core es un sistema administrativo para dojos y academias de artes marciales
                    y deportes de contacto.
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                    {['Electron', 'React', 'Tailwind', 'MySQL'].map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <Link
                    to="dojocore"
                    onClick={() => scrollToSection('dojo-core')}
                    className="inline-flex items-center gap-1 text-indigo-300 font-medium text-sm hover:text-indigo-200 transition-colors"
                >
                    Ver documentación del sitio
                </Link>
            </div>
        </div>
    )
}