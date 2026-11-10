const tecnologias = ["JavaScript", "PHP", "Python", "Java", "React", "Node.js", "Electron", "Tailwind"];

export default function SobreMi() {
    return (
        <section className="w-full overflow-hidden">
            <div className="relative flex h-full w-full flex-col justify-center gap-6 border-y border-white/10 bg-secundario/75 px-8 py-16 backdrop-blur-md md:px-20 md:py-24">
                <div className="accent-line" />

                <h1 className="rise-in text-3xl font-bold tracking-tight md:text-5xl">
                    Sobre <span className="text-indigo-400">mí</span>
                </h1>

                <p className="rise-in max-w-4xl text-justify leading-relaxed text-white/90" style={{ animationDelay: "80ms" }}>
                    Soy un desarrollador de aplicaciones web, desktop y móviles. Mis principales
                    lenguajes son <span className="font-semibold text-white">JavaScript, PHP, Python, Java
                    y MySQL</span>, pero cuento con la versatilidad y capacidad de aprender lenguajes nuevos
                    con facilidad y adaptarme a nuevas tecnologías.
                </p>

                <p className="rise-in max-w-4xl text-justify leading-relaxed text-white/90" style={{ animationDelay: "160ms" }}>
                    Además, tengo experiencia en frameworks de JavaScript como{" "}
                    <span className="font-semibold text-white">Electron, Node.js, React JS y React Native</span>,
                    así como en frameworks de estilos como <span className="font-semibold text-white">TailwindCSS
                    y Bootstrap</span>.
                </p>

                <p className="rise-in max-w-4xl leading-relaxed text-white/90" style={{ animationDelay: "240ms" }}>
                    Tambièn, soy el fundador y director de <span className="font-semibold text-white">Data-Core</span> Proyects Software Management (registro pendiente),
                    empresa especializada en el desarrollo de Software con el fin de innovar con patentes propias
                    asi como ofrecer servicios de freelancing.
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                    {tecnologias.map((tech, index) => (
                        <span
                            key={tech}
                            className="rise-in rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium transition-colors duration-300 hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-400/20"
                            style={{ animationDelay: `${320 + index * 50}ms` }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
