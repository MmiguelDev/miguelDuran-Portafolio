import DojoCoreCard from "./Cards/DojoCoreCard"
import CalculatorTerminalisCard from "./Cards/CalcultorTerminalisCard"

export default function Proyects() {
    return (
        <section className="w-full p-10">
            <h1 className="text-black text-2xl font-bold text-center m-8"> Proyectos desarrollados. </h1>

            <div className="flex flex-wrap gap-8 justify-center">
                <DojoCoreCard />
                <CalculatorTerminalisCard />
            </div>
        </section>
    )
}