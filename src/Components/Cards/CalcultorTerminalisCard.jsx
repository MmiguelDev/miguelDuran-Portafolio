import { Link } from 'react-router-dom';

import inicio from '../../assets/integratorapp/inicio.png';

export default function CalculatorTerminalisCard() {
    return (
        <div className="shine group w-80 overflow-hidden rounded-2xl border border-white/10 bg-secundario text-white shadow-xl transition duration-300 hover:-translate-y-1.5 hover:border-pink-300/40 hover:shadow-2xl hover:shadow-pink-950/40">

            <div className="overflow-hidden">
                <img
                    src={inicio}
                    alt="Inicio de Integrator-App"
                    className="h-48 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
            </div>

            <div className="flex flex-col p-6">
                <h1 className="mb-3 text-xl font-bold text-pink-300">
                    Integrator-App
                </h1>

                <p className="mb-4 flex-1 text-justify text-sm leading-relaxed text-white/80">
                    Integrator app es un proyecto escolar que sirve para calcular el area bajo la curva
                    dada por una funcion.
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                    {['React', 'Tailwind', 'Math.js', 'Anime.js'].map((tech) => (
                        <span
                            key={tech}
                            className="chip rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium hover:border-pink-300 hover:bg-pink-300/15"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <Link
                    to="integratorapp"
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-300 transition-colors hover:gap-2 hover:text-indigo-200"
                >
                    Ver documentación del sitio
                </Link>
            </div>
        </div>
    )
}
