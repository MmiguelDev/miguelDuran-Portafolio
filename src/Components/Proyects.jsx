import DojoCoreCard from "./Cards/DojoCoreCard"
import CalculatorTerminalisCard from "./Cards/CalcultorTerminalisCard"
import Reveal from "./Reveal"

export default function Proyects() {
    return (
        <section className="w-full px-6 py-16 md:px-10">
            <h1 className="mb-12 text-center text-3xl font-bold text-white">
                Proyectos <span className="text-indigo-400">desarrollados</span>
            </h1>

            <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center">
                <Reveal className="w-full max-w-80">
                    <DojoCoreCard />
                </Reveal>
                <Reveal className="w-full max-w-80" delay={140}>
                    <CalculatorTerminalisCard />
                </Reveal>
            </div>
        </section>
    )
}
