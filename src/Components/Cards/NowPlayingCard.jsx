import { Link } from 'react-router-dom';

import icono from '../../assets/nowplaying/icon.svg';

export default function NowPlayingCard() {
    return (
        <div className="shine group flex h-[34rem] w-full max-w-80 flex-col overflow-hidden rounded-2xl border border-white/10 bg-secundario text-white shadow-xl transition duration-300 hover:-translate-y-1.5 hover:border-emerald-300/40 hover:shadow-2xl hover:shadow-emerald-950/40">

            <div className="flex h-48 shrink-0 items-center justify-center bg-[#101114]">
                <img
                    src={icono}
                    alt="Icono de Now Playing"
                    className="h-28 w-28 rounded-[1.75rem] shadow-lg transition-transform duration-500 ease-out group-hover:scale-110"
                />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <h1 className="mb-3 text-xl font-bold">
                    Now <span className="text-emerald-300">Playing</span>
                </h1>

                <p className="mb-4 flex-1 text-justify text-sm leading-relaxed text-white/80">
                    La portada de lo que suena pasa al fondo del teléfono: pantalla de bloqueo y escritorio, y vuelve el fondo anterior cuando la música para.
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                    {['Kotlin', 'Compose', 'Android'].map((tech) => (
                        <span
                            key={tech}
                            className="chip rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium hover:border-emerald-300 hover:bg-emerald-300/15"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <Link
                    to="nowplaying"
                    className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-emerald-300 transition-colors hover:gap-2 hover:text-emerald-200"
                >
                    Ver el proyecto
                </Link>
            </div>
        </div>
    )
}
