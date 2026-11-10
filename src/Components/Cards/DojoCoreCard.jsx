import { Link } from 'react-router-dom';

import login from '../../assets/dojocore/login.png';

export default function DojoCoreCard() {
    return (
        <div className="shine group flex h-[34rem] w-80 flex-col overflow-hidden rounded-2xl border border-white/10 bg-secundario text-white shadow-xl transition duration-300 hover:-translate-y-1.5 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-950/50">

            <div className="overflow-hidden">
                <img
                    src={login}
                    alt="Login de Dojo-Core"
                    className="h-48 w-full shrink-0 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <h1 className="font-bold text-xl mb-3">
                    Dojo-<span className="text-indigo-400">Core</span>
                </h1>

                <p className="text-justify text-white/80 text-sm leading-relaxed mb-4 flex-1">
                    Sistema para academias de artes marciales. El escritorio lleva pagos, reportes
                    y configuración; la app del instructor cubre asistencia, alumnos y horario.
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                    {['Electron', 'React', 'Expo', 'PostgreSQL'].map((tech) => (
                        <span
                            key={tech}
                            className="chip rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium hover:border-indigo-400 hover:bg-indigo-400/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <Link
                    to="dojocore"
                    className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-indigo-300 transition-colors hover:gap-2 hover:text-indigo-200"
                >
                    Ver documentación del sitio
                </Link>
            </div>
        </div>
    )
}