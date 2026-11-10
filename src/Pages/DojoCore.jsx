import { useState } from 'react';

import login from '../assets/dojocore/login.png';
import dashboard from "../assets/dojocore/dashboard.png";
import asistenciaQR from "../assets/dojocore/asistenciaQR.png";
import reportes from "../assets/dojocore/reportes.png";
import cardAlumno from "../assets/dojocore/CardAlumno.png";
import movilAsistencia from "../assets/dojocore/mobil/WhatsApp Image 2026-11-10 at 10.23.07 AM (1).jpeg";
import movilBusqueda from "../assets/dojocore/mobil/WhatsApp Image 2026-11-10 at 10.23.07 AM (2).jpeg";
import movilHorario from "../assets/dojocore/mobil/WhatsApp Image 2026-11-10 at 10.23.07 AM (5).jpeg";

import ImageModal from '../Components/Modals/ImagenModal';

export default function DojoCore() {

    const [modalImg, setModalImg] = useState(null); 

    const features = [
        {
            title: "Dashboard principal",
            img: dashboard,
            alt: "Dashboard principal de Dojo-Core",
            desc: "De un vistazo: cuánto entró hoy, esta semana y este mes, y qué tiene la academia en el calendario."
        },
        {
            title: "Asistencia por QR",
            img: asistenciaQR,
            alt: "Asistencia por código QR en Dojo-Core",
            desc: "Cada alumno trae su propio código. Se lee en la computadora o con la cámara del instructor."
        },
        {
            title: "Ficha de alumno",
            img: cardAlumno,
            alt: "Ficha individual de alumno en Dojo-Core",
            desc: "Historial, pago y contacto en una sola ficha. Teléfono y emergencia no salen en la consulta pública."
        },
        {
            title: "Reportes",
            img: reportes,
            alt: "Reportes y estadísticas de Dojo-Core",
            desc: "La semana y el mes en gráficas, listos para guardarse en PDF."
        },
    ];

    const pantallasMovil = [
        {
            title: "Asistencia del día",
            img: movilAsistencia,
            alt: "Captura de QR y clases del día en la app móvil",
            desc: "Elige la clase del día, encuadra el código y listo."
        },
        {
            title: "Búsqueda por apellido",
            img: movilBusqueda,
            alt: "Búsqueda de un alumno por apellido en la asistencia",
            desc: "Si el código no lee, se busca por apellido y aparece la matrícula."
        },
        {
            title: "Horario semanal",
            img: movilHorario,
            alt: "Horario de clases de la semana en la app móvil",
            desc: "Las clases de la semana, con su disciplina y su hora. Se editan desde el teléfono."
        },
    ];

    return (
        <section className="page-enter text-white">
            <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
                <h1 className="font-bold text-3xl">
                    Dojo-<span className="text-indigo-300">Core</span>
                </h1>
                <h2 className="text-white/80">
                    La academia, del tatami al escritorio
                </h2>
            </div>

            <div className="flex flex-col items-center bg-secundario text-white shadow-lg lg:flex-row">
                <div className="w-full px-6 py-8 lg:w-1/2 lg:p-10">
                    <h1 className="m-2 text-center text-xl">
                        ¿Qué es <span className="font-bold">Dojo-Core</span>?
                    </h1>

                    <p className='text-justify'>
                        <span className="font-bold">Dojo-Core </span>
                        es el sistema de Data-Core para academias de artes marciales.
                        En el escritorio se ven los alumnos, los pagos y cómo va el mes.
                        En el tatami, el instructor pasa lista con el teléfono.
                        Quien escanea el código público solo ve el nombre y si el pago está al día.
                    </p>
                </div>

                <div className="w-full overflow-hidden px-6 pb-8 lg:w-1/2 lg:p-10">
                    <img
                        src={login}
                        alt="Login de la app"
                        onClick={() => setModalImg({ src: login, alt: "Login de la app" })}
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
                        React construye la interfaz por piezas, así cada pantalla se arma y se
                        cambia sin rehacer todo el programa.
                    </p>
                    <p className='md:w-1/3'>
                        Tailwind da el aspecto visual y solo incluye los estilos que la
                        pantalla realmente usa.
                    </p>
                    <p className='md:w-1/3'>
                        Electron lo instala en Windows y Linux, y avisa cuando hay una
                        versión nueva.
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-6 bg-secundario px-6 py-10 text-white shadow-lg lg:flex-row lg:items-start lg:px-10'>
                <div className='w-full lg:w-1/4'>
                    <h1 className='text-2xl font-bold'>Tecnologías utilizadas</h1>
                    <h2 className='font-semibold'>en el backend</h2>
                </div>

                <div className='flex w-full flex-col gap-6 text-justify md:flex-row lg:w-3/4'>
                    <p className='md:w-1/2'>
                        Una sola API, en Node.js y Express, atiende al escritorio, al teléfono
                        y a la página pública. Los tres ven los mismos alumnos y los mismos pagos.
                    </p>

                    <p className='md:w-1/2'>
                        PostgreSQL guarda la academia. Prisma organiza alumnos, clases,
                        asistencias y eventos sin escribir el SQL a mano.
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-6 px-6 py-10 lg:flex-row lg:items-start lg:px-10'>
                <div className='w-full lg:w-1/4'>
                    <h1 className='text-2xl font-bold'>App del instructor</h1>
                    <h2 className='font-semibold'>y consulta pública</h2>
                </div>

                <div className='flex w-full flex-col gap-6 text-justify md:flex-row lg:w-3/4'>
                    <p className='md:w-1/2'>
                        Con Expo y React Native, el instructor pasa lista, cobra, da de alta
                        alumnos y arma el horario sin volver a la computadora. Los reportes
                        y la configuración se quedan en el escritorio.
                    </p>

                    <p className='md:w-1/2'>
                        La consulta pública enseña solo el nombre y el estado del pago.
                        Teléfono, correo y emergencia siguen en la ficha privada.
                    </p>
                </div>
            </div>

            <div className="px-4 pb-4 sm:px-6 md:px-10">
                <h2 className="text-2xl font-bold text-center mb-2">Pantallas de la app</h2>
                <p className="text-center text-indigo-200/70 mb-10">
                    Pasar lista, sin salir del tatami
                </p>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {pantallasMovil.map((pantalla) => (
                        <div
                            key={pantalla.title}
                            className="flex h-40 flex-row items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white p-3 text-primario shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-950/30"
                        >
                            <img
                                src={pantalla.img}
                                alt={pantalla.alt}
                                onClick={() => setModalImg({ src: pantalla.img, alt: pantalla.alt })}
                                className="h-32 w-16 shrink-0 cursor-pointer rounded-lg bg-black object-contain shadow-md"
                            />
                            <div className="flex min-w-0 flex-col gap-1">
                                <h3 className="font-bold text-sm">{pantalla.title}</h3>
                                <p className="text-xs text-gray-600">
                                    {pantalla.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
                <h2 className="text-2xl font-bold text-center mb-2">Funcionalidades</h2>
                <p className="text-center text-indigo-200/70 mb-10">
                    Lo que la academia revisa cada día
                </p>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex h-64 flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white p-4 text-primario shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-950/30"
                        >
                            <h3 className="mb-2 text-center text-sm font-bold">{feature.title}</h3>
                            <img
                                src={feature.img}
                                alt={feature.alt}
                                onClick={() => setModalImg({ src: feature.img, alt: feature.alt })}
                                className="mb-3 h-28 w-full cursor-pointer rounded-lg object-cover shadow-md transition-transform duration-300 ease-out hover:scale-105"
                            />
                            <p className="text-center text-xs text-gray-600">
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