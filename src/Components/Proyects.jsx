import DojoCoreCard from "./Cards/DojoCoreCard"
import CalculatorTerminalisCard from "./Cards/CalcultorTerminalisCard"
import Reveal from "./Reveal"

export default function Proyects() {
    return (
        <section className="w-full px-6 py-16 md:px-10">
            <h1 className="mb-12 text-center text-3xl font-bold text-white">
                Proyectos <span className="text-indigo-400">desarrollados</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-8">
                <Reveal>
                    <DojoCoreCard />
                </Reveal>
                <Reveal delay={140}>
                    <CalculatorTerminalisCard />
                </Reveal>
            </div>
        </section>
    )
}
