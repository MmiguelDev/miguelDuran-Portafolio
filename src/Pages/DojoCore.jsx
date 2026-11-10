import { useState } from 'react';

import login from '../assets/dojocore/login.png';
import dashboard from "../assets/dojocore/dashboard.png";
import dasboradAsistencias from "../assets/dojocore/dasboradAsistencias.png"
import asistenciaQR from "../assets/dojocore/asistenciaQR.png";
import registrarAlumnos from "../assets/dojocore/registrarAlumnos.png";
import reportes from "../assets/dojocore/reportes.png";
import cardAlumno from "../assets/dojocore/CardAlumno.png";
import editar from "../assets/dojocore/editar.png";
import protectedView from "../assets/dojocore/protected.png";
import config from "../assets/dojocore/config.png";
import movilInicio from "../assets/dojocore/mobil/WhatsApp Image 2026-11-10 at 10.23.07 AM.jpeg";
import movilAsistencia from "../assets/dojocore/mobil/WhatsApp Image 2026-11-10 at 10.23.07 AM (1).jpeg";
import movilBusqueda from "../assets/dojocore/mobil/WhatsApp Image 2026-11-10 at 10.23.07 AM (2).jpeg";
import movilAlta from "../assets/dojocore/mobil/WhatsApp Image 2026-11-10 at 10.23.07 AM (3).jpeg";
import movilContacto from "../assets/dojocore/mobil/WhatsApp Image 2026-11-10 at 10.23.07 AM (4).jpeg";
import movilHorario from "../assets/dojocore/mobil/WhatsApp Image 2026-11-10 at 10.23.07 AM (5).jpeg";
import movilEventos from "../assets/dojocore/mobil/WhatsApp Image 2026-11-10 at 10.23.07 AM (6).jpeg";
import movilAjustes from "../assets/dojocore/mobil/WhatsApp Image 2026-11-10 at 10.23.07 AM (7).jpeg";

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
            title: "Dashboard de asistencias",
            img: dasboradAsistencias,
            alt: "Dashboard de asistencias de Dojo-Core",
            desc: "Pasa lista y, si el pago ya venció, cobra en el momento. Lo mismo se puede hacer desde el teléfono."
        },
        {
            title: "Asistencia por QR",
            img: asistenciaQR,
            alt: "Asistencia por código QR en Dojo-Core",
            desc: "Cada alumno trae su propio código. Se lee en la computadora o con la cámara del instructor."
        },
        {
            title: "Registro de alumnos",
            img: registrarAlumnos,
            alt: "Registro de alumnos en Dojo-Core",
            desc: "Alta con contacto y emergencia. La matrícula la pone el sistema y queda en esa academia."
        },
        {
            title: "Ficha de alumno",
            img: cardAlumno,
            alt: "Ficha individual de alumno en Dojo-Core",
            desc: "Historial, pago y contacto en una sola ficha. Teléfono y emergencia no salen en la consulta pública."
        },
        {
            title: "Edición de información",
            img: editar,
            alt: "Edición de datos en Dojo-Core",
            desc: "Corrige la ficha, el horario o un pago sin salir del sistema."
        },
        {
            title: "Reportes",
            img: reportes,
            alt: "Reportes y estadísticas de Dojo-Core",
            desc: "La semana y el mes en gráficas, listos para guardarse en PDF."
        },
        {
            title: "Vistas protegidas",
            img: protectedView,
            alt: "Protección de vistas privadas en Dojo-Core",
            desc: "Reportes, configuración y otras zonas sensibles piden la contraseña del administrador."
        },
        {
            title: "Panel de configuración",
            img: config,
            alt: "Panel de configuración de Dojo-Core",
            desc: "Nombre, dirección, teléfono y precio por día. También pide la contraseña."
        },
    ];

    const pantallasMovil = [
        {
            title: "Emblema",
            img: movilInicio,
            alt: "Pantalla de inicio de la app móvil de Dojo-Core",
            desc: "La marca de Dojo-Core, lo primero que ve el instructor al abrir la app."
        },
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
            title: "Alta del alumno",
            img: movilAlta,
            alt: "Formulario para agregar un alumno desde el teléfono",
            desc: "Nombre, fecha de nacimiento, estatura, peso y nivel: principiante, intermedio o avanzado."
        },
        {
            title: "Contacto y confirmación",
            img: movilContacto,
            alt: "Datos de contacto y confirmación al guardar un alumno",
            desc: "Teléfono, correo y emergencia. Para guardar hace falta la clave del maestro, o la huella."
        },
        {
            title: "Horario semanal",
            img: movilHorario,
            alt: "Horario de clases de la semana en la app móvil",
            desc: "Las clases de la semana, con su disciplina y su hora. Se editan desde el teléfono."
        },
        {
            title: "Eventos",
            img: movilEventos,
            alt: "Lista de eventos próximos en la app móvil",
            desc: "Exámenes y fechas importantes, con día y hora."
        },
        {
            title: "Ajustes y seguridad",
            img: movilAjustes,
            alt: "Ajustes de huella y búsqueda de actualizaciones",
            desc: "La huella guarda la clave solo en ese teléfono y la borra al salir. Aquí también se buscan actualizaciones."
        },
    ];

    return (
        <section className="page-enter text-white">
            <div className="flex flex-col m-10 items-center gap-5">
                <h1 className="font-bold text-3xl">
                    Dojo-<span className="text-indigo-300">Core</span>
                </h1>
                <h2 className="text-white/80">
                    La academia, del tatami al escritorio
                </h2>
            </div>

            <div className="flex items-center bg-secundario text-white shadow-lg">
                <div className="flex-col m-10 size-1/2 justify-center">
                    <h1 className="text-center m-2 text-xl">
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

                <div className="flex-col m-10 size-1/2 justify-center">
                    <img
                        src={login}
                        alt="Login de la app"
                        onClick={() => setModalImg({ src: login, alt: "Login de la app" })}
                        className='transition-transform duration-300 ease-out hover:scale-105 shadow-2xl cursor-pointer rounded-xl'
                    />
                </div>
            </div>

            <div className='m-10 flex items-center'>
                <div className='mb-5 w-1/4'>
                    <h1 className='text-2xl font-bold'>Tecnologías utilizadas</h1>
                    <h2 className='font-semibold'>en el frontend</h2>
                </div>

                <div className='w-3/4 flex gap-12 text-justify'>
                    <p className='w-1/3'>
                        React construye la interfaz por piezas, así cada pantalla se arma y se
                        cambia sin rehacer todo el programa.
                    </p>
                    <p className='w-1/3'>
                        Tailwind da el aspecto visual y solo incluye los estilos que la
                        pantalla realmente usa.
                    </p>
                    <p className='w-1/3'>
                        Electron lo instala en Windows y Linux, y avisa cuando hay una
                        versión nueva.
                    </p>
                </div>
            </div>

            <div className='p-10 flex items-center bg-secundario text-white shadow-lg'>
                <div className='mb-5 w-1/4'>
                    <h1 className='text-2xl font-bold'>Tecnologías utilizadas</h1>
                    <h2 className='font-semibold'>en el backend</h2>
                </div>

                <div className='w-3/4 flex gap-12 text-justify'>
                    <p className='w-1/2'>
                        Una sola API, en Node.js y Express, atiende al escritorio, al teléfono
                        y a la página pública. Los tres ven los mismos alumnos y los mismos pagos.
                    </p>

                    <p className='w-1/2'>
                        PostgreSQL guarda la academia. Prisma organiza alumnos, clases,
                        asistencias y eventos sin escribir el SQL a mano.
                    </p>
                </div>
            </div>

            <div className='m-10 flex items-center'>
                <div className='mb-5 w-1/4'>
                    <h1 className='text-2xl font-bold'>App del instructor</h1>
                    <h2 className='font-semibold'>y consulta pública</h2>
                </div>

                <div className='w-3/4 flex gap-12 text-justify'>
                    <p className='w-1/2'>
                        Con Expo y React Native, el instructor pasa lista, cobra, da de alta
                        alumnos y arma el horario sin volver a la computadora. Los reportes
                        y la configuración se quedan en el escritorio.
                    </p>

                    <p className='w-1/2'>
                        La consulta pública enseña solo el nombre y el estado del pago.
                        Teléfono, correo y emergencia siguen en la ficha privada.
                    </p>
                </div>
            </div>

            <div className="px-10 pb-4">
                <h2 className="text-2xl font-bold text-center mb-2">Pantallas de la app</h2>
                <p className="text-center text-indigo-200/70 mb-10">
                    Pasar lista, sin salir del tatami
                </p>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {pantallasMovil.map((pantalla) => (
                        <div
                            key={pantalla.title}
                            className="flex h-[24rem] flex-row items-center gap-6 rounded-2xl border border-white/10 bg-white p-6 text-primario shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-950/30"
                        >
                            <img
                                src={pantalla.img}
                                alt={pantalla.alt}
                                onClick={() => setModalImg({ src: pantalla.img, alt: pantalla.alt })}
                                className="h-80 w-36 shrink-0 object-contain bg-black rounded-xl shadow-md cursor-pointer"
                            />
                            <div className="flex flex-col gap-3 min-w-0">
                                <h3 className="font-bold text-lg">{pantalla.title}</h3>
                                <p className="text-justify text-sm text-gray-600">
                                    {pantalla.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-10 py-16">
                <h2 className="text-2xl font-bold text-center mb-2">Funcionalidades</h2>
                <p className="text-center text-indigo-200/70 mb-10">
                    Lo que la academia revisa cada día
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex h-[28rem] flex-col items-center rounded-2xl border border-white/10 bg-white p-6 text-primario shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-950/30"
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