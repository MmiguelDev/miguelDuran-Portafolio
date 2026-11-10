import SobreMi from "../Components/SobreMi";
import Proyects from "../Components/Proyects";
import Contacts from "../Components/Contacts";

export default function Home () {
    return (
        <section id="inicio" className="page-enter">
            <SobreMi/>

            <div id="proyectos" className="scroll mt-16">
                <Proyects />
            </div>
        </section>
    )
}