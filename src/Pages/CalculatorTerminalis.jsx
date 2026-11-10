import { useState } from "react"

import inicio from "../assets/integratorapp/inicio.png"
import ChangeMetod from "../assets/integratorapp/ChangeMetod.png"
import PoligonosChart from "../assets/integratorapp/PoligonosChart.png"
import PoligonosForm from "../assets/integratorapp/PoligonosForm.png"
import RiemannChart from "../assets/integratorapp/RiemannChart.png"
import RiemannForm from "../assets/integratorapp/RiemannForm.png"
import SimpsonForm from "../assets/integratorapp/SimpsonForm.png"
import SimpsonChart from "../assets/integratorapp/SimpsonChart.png"

import ImageModal from "../Components/Modals/ImagenModal"

export default function CalculatorTerminalisCard() {
    const [modalImg, setModalImg] = useState(null);

    const features = [
        {
            title: "Pagina de introduccion",
            img: inicio,
            alt: "Pagina de introduccion de Integrator-App",
            desc: "La aplicacion muestra una breve introducción de la aplicación y su funcionalidad."
        },
        {
            title: "Dropdownd de seleccion",
            img: ChangeMetod,
            alt: "Dropdown de seleccion de metodo",
            desc: "Este menú permite cambiar alternar entre los diferentes métodos de integracion para aproximar el area bajo una curva."
        },
        {
            title: "Formulario de Riemman",
            img: RiemannForm,
            alt: "Formulario para ingresar los parametros",
            desc: "El software muestra diferentes metodos de integración, el metodo por default siempre será Riemann por eleccion del autor."
        },
        {
            title: "Gráfica de Riemman",
            img: RiemannChart,
            alt: "Grafica que muestra la aproximación del area",
            desc: "La gráfica permite apreciar como funciona el metodo de Riemann y rellena el area bajo la curva."
        },
        {
            title: "Formulario de Simpson",
            img: SimpsonForm,
            alt: "Formulario para ingresar los parametros",
            desc: "Otro método de aproximación es el de Simpson, el cual también es seleccionable en este sistema."
        },
        {
            title: "Gráfica de Simpson",
            img: SimpsonChart,
            alt: "Grafica que muestra la aproximación del area",
            desc: "La gráfica permite apreciar como funciona el metodo de Simpson y rellena el area bajo la curva."
        },
        {
            title: "Formulario de Poligonos",
            img: PoligonosForm,
            alt: "Formulario para ingresar los parametros",
            desc: "Otro método de aproximación es el de Poligonos, el cual también es seleccionable en este sistema."
        },
        {
            title: "Gráfica de polígonos",
            img: PoligonosChart,
            alt: "Grafica que muestra la aproximación del area",
            desc: "La gráfica permite apreciar como funciona el metodo de Polígonos y rellena el area bajo la curva."
        },
    ];

    return (
        <section className="page-enter text-white">
            <div className="flex flex-col items-center gap-3 px-6 py-10 text-center" id="inegratorapp">
                <h1 className="font-bold text-3xl text-pink-300">
                    Integrator-App
                </h1>
                <h2>
                    Proyecto escolar.
                </h2>
            </div>

            <div className="flex flex-col items-center bg-secundario text-white shadow-lg lg:flex-row">
                <div className="w-full px-6 py-8 lg:w-1/2 lg:p-10">
                    <h1 className="m-2 text-center text-xl">
                        ¿Qué es <span className="font-bold">Integrator-App</span>?
                    </h1>

                    <p className='text-justify'>
                        <span className="font-bold">Integrator-App </span>
                        es una aplicación de escritorio la cual su principal funcionalidad es calcular el area
                        bajo la curva de una funcion ingresada por el usuario por medio de metodos de aproximación
                        matemáticos, mostrando como resultado la grafica de la función y el area en unidades cuadradas.
                    </p>
                </div>

                <div className="w-full overflow-hidden px-6 pb-8 lg:w-1/2 lg:p-10">
                    <img
                        src={inicio}
                        alt="Inicio de Integrator-App"
                        onClick={() => setModalImg({ src: inicio, alt: "Inicio de Integrator-App" })}
                        className='w-full cursor-pointer rounded-xl shadow-2xl transition-transform duration-300 ease-out hover:scale-105'
                    />
                </div>
            </div>

            <div className='flex flex-col gap-6 px-6 py-10 lg:flex-row lg:items-start lg:px-10'>
                <div className='w-full lg:w-1/4'>
                    <h1 className='text-2xl font-bold'>Tecnologías utilizadas</h1>
                    <h2 className='font-semibold'>en el frontend</h2>
                </div>

                <div className='flex w-full flex-col gap-6 text-justify md:flex-row lg:w-3/4'>
                    <p className='md:w-1/3'>
                        El frontend fue desarrollado principalmente con JavaScript, usando React JS
                        como framework principal. React divide la interfaz en piezas independientes y
                        reutilizables llamadas componentes, lo que facilita el mantenimiento y la
                        escalabilidad del proyecto.
                    </p>
                    <p className='md:w-1/3'>
                        Tailwind, en su cuarta versión, se encarga del diseño web mediante clases de
                        utilidad con sintaxis similar a CSS. Esto optimiza los tiempos de diseño,
                        mantiene la consistencia visual y mejora el rendimiento, pues solo exporta
                        las clases realmente necesarias.
                    </p>
                    <p className='md:w-1/3'>
                        Electron combina el motor Chromium con Node.js en un solo framework, permitiendo
                        crear aplicaciones de escritorio multiplataforma. Esto une la interfaz web con
                        capacidades de sistema, todo dentro de un mismo entorno de desarrollo.
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-6 bg-secundario px-6 py-10 text-white shadow-lg lg:flex-row lg:items-start lg:px-10'>
                <div className='w-full lg:w-1/4'>
                    <h1 className='text-2xl font-bold'>Tecnologías utilizadas</h1>
                    <h2 className='font-semibold'>en el cálculo de la integral.</h2>
                </div>

                <div className='flex w-full flex-col gap-6 text-justify md:flex-row lg:w-3/4'>
                    <p className='md:w-1/2'>
                        En la logica de la integral se utilizan math.js, esta es una librería que amplifica las
                        capacidades matemáticas nativas de JavaScript soportando tipos de datos comlpejos como
                        fracciones, unidades de medida y matrices.
                    </p>

                    <p className='md:w-1/2'>
                        Por la parte del renderizado de la integral se utiliza anime.js, el cual es una
                        libreria de animacion ligera que permite crear animaciones por medio de un API,
                        funciona animando casi cada cualquier cosa basada en la web.
                    </p>
                </div>
            </div>

            <div className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
                <h2 className="text-2xl font-bold text-center mb-2">Funcionalidades</h2>
                <p className="text-center text-indigo-200/70 mb-10">
                    Un vistazo a las principales pantallas del sistema
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex h-[28rem] flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white p-6 text-primario shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-950/30"
                        >
                            <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                            <img
                                src={feature.img}
                                alt={feature.alt}
                                onClick={() => setModalImg({ src: feature.img, alt: feature.alt })}
                                className="h-48 w-full object-cover rounded-xl shadow-md mb-4 transition-transform duration-300 ease-out hover:scale-105 cursor-pointer"
                            />
                            <p className="text-justify text-sm text-gray-600">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <ImageModal
                isOpen={!!modalImg}
                onClose={() => setModalImg(null)}
                src={modalImg?.src}
                alt={modalImg?.alt}
            />
        </section>
    )
}