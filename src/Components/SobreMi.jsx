export default function SobreMi() {
    return (
        <section className="w-full shadow-2xl overflow-hidden">
            <div className="relative p-20 bg-secundario text-white gap-6 h-full w-full flex flex-col justify-center px-8 transition-transform duration-500 hover:scale-[1.02]">
                
                <div className="absolute top-0 left-0 w-24 h-1 bg-indigo-400 rounded-full mb-4"></div>

                <h1 className="font-bold text-3xl md:text-4xl tracking-tight">
                    Sobre <span className="text-indigo-400">mí</span>
                </h1>

                <p className="text-justify text-white/90 leading-relaxed">
                    Soy un desarrollador de aplicaciones web, desktop y móviles. Mis principales
                    lenguajes son <span className="font-semibold text-white">JavaScript, PHP, Python, Java
                    y MySQL</span>, pero cuento con la versatilidad y capacidad de aprender lenguajes nuevos
                    con facilidad y adaptarme a nuevas tecnologías.
                </p>

                <p className="text-justify text-white/90 leading-relaxed">
                    Además, tengo experiencia en frameworks de JavaScript como{' '}
                    <span className="font-semibold text-white">Electron, Node.js, React JS y React Native</span>,
                    así como en frameworks de estilos como <span className="font-semibold text-white">TailwindCSS
                    y Bootstrap</span>.
                </p>

                <p>
                    Tambièn, soy el fundador y director de <span className="font-semibold text-white">Data-Core</span> Proyects Software Management (registro pendiente),
                    empresa especializada en el desarrollo de Software con el fin de innovar con patentes propias
                    asi como ofrecer servicios de freelancing.
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {['JavaScript', 'PHP', 'Python', 'Java', 'React', 'Node.js', 'Electron', 'Tailwind'].map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-medium hover:bg-indigo-400/20 hover:border-indigo-400 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}