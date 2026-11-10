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
            desc: "Muestra las ganancias diarias, semanales y mensuales, las fechas pendientes y el calendario de actividades de la academia."
        },
        {
            title: "Dashboard de asistencias",
            img: dasboradAsistencias,
            alt: "Dashboard de asistencias de Dojo-Core",
            desc: "Registra la asistencia del día y, si el pago no está al día, permite cobrar antes de continuar. La app del instructor hace la misma revisión desde el teléfono."
        },
        {
            title: "Asistencia por QR",
            img: asistenciaQR,
            alt: "Asistencia por código QR en Dojo-Core",
            desc: "Cada alumno tiene un código QR propio, generado a partir de su matrícula. Se lee en el escritorio y con la cámara de la app del instructor."
        },
        {
            title: "Registro de alumnos",
            img: registrarAlumnos,
            alt: "Registro de alumnos en Dojo-Core",
            desc: "Da de alta alumnos con sus datos de contacto y de emergencia. La matrícula la asigna el sistema y queda ligada a la academia."
        },
        {
            title: "Ficha de alumno",
            img: cardAlumno,
            alt: "Ficha individual de alumno en Dojo-Core",
            desc: "Reúne en una sola vista el historial, el estado de pago y los datos de contacto. Esos datos no aparecen en la consulta pública."
        },
        {
            title: "Edición de información",
            img: editar,
            alt: "Edición de datos en Dojo-Core",
            desc: "Actualiza la ficha del alumno, el horario de clases y los pagos, para que la información de la academia siga al día."
        },
        {
            title: "Reportes",
            img: reportes,
            alt: "Reportes y estadísticas de Dojo-Core",
            desc: "Resume las ganancias por semana y por mes, con gráficas y exportación a PDF, para revisar cómo va la academia."
        },
        {
            title: "Vistas protegidas",
            img: protectedView,
            alt: "Protección de vistas privadas en Dojo-Core",
            desc: "Las secciones sensibles del sistema están protegidas mediante la contraseña del administrador, evitando que usuarios sin permisos accedan a información o acciones críticas de la academia."
        },
        {
            title: "Panel de configuración",
            img: config,
            alt: "Panel de configuración de Dojo-Core",
            desc: "Actualiza el nombre, la dirección, el teléfono y el precio por día de la academia. El acceso pide la contraseña del administrador."
        },
    ];

    const pantallasMovil = [
        {
            title: "Emblema",
            img: movilInicio,
            alt: "Pantalla de inicio de la app móvil de Dojo-Core",
            desc: "Al abrir la app aparece el emblema del samurái con el calendario. Es la marca de Dojo-Core en el teléfono del instructor."
        },
        {
            title: "Asistencia del día",
            img: movilAsistencia,
            alt: "Captura de QR y clases del día en la app móvil",
            desc: "El instructor elige la clase, encuadra el código del alumno y pulsa Capturar. En la captura se ven tres horarios de Jiu-Jitsu."
        },
        {
            title: "Búsqueda por apellido",
            img: movilBusqueda,
            alt: "Búsqueda de un alumno por apellido en la asistencia",
            desc: "Si el QR no se lee, Lista por apellido abre el buscador. Al escribir, aparecen el nombre y la matrícula para registrar la asistencia."
        },
        {
            title: "Alta del alumno",
            img: movilAlta,
            alt: "Formulario para agregar un alumno desde el teléfono",
            desc: "El alta pide nombre, apellidos, fecha de nacimiento, estatura, peso y el nivel: principiante, intermedio o avanzado."
        },
        {
            title: "Contacto y confirmación",
            img: movilContacto,
            alt: "Datos de contacto y confirmación al guardar un alumno",
            desc: "Más abajo van el teléfono, el correo y el contacto de emergencia. Guardar pide la contraseña del maestro, o la huella si está activada."
        },
        {
            title: "Horario semanal",
            img: movilHorario,
            alt: "Horario de clases de la semana en la app móvil",
            desc: "La pestaña Horario lista las clases de cada día, con su disciplina y su franja. Editar horario cambia esas franjas desde el teléfono."
        },
        {
            title: "Eventos",
            img: movilEventos,
            alt: "Lista de eventos próximos en la app móvil",
            desc: "En la misma pestaña, Eventos muestra lo que viene y permite agregar uno. En la captura hay un examen de cintas negras, con fecha y hora."
        },
        {
            title: "Ajustes y seguridad",
            img: movilAjustes,
            alt: "Ajustes de huella y búsqueda de actualizaciones",
            desc: "Confirmar con huella guarda la clave del maestro solo en el teléfono y la borra al salir. Desde aquí también se busca una actualización de la app."
        },
    ];

    return (
        <section>
            <div className="flex flex-col m-10 items-center gap-5">
                <h1 className="font-bold text-3xl">
                    Dojo-<span className="text-indigo-900">Core</span>
                </h1>
                <h2>
                    Por <span className="font-bold">Data-Core</span> Software Management
                </h2>
            </div>

            <div className="flex items-center bg-secundario text-white shadow-lg">
                <div className="flex-col m-10 size-1/2 justify-center">
                    <h1 className="text-center m-2 text-xl">
                        ¿Qué es <span className="font-bold">Dojo-Core</span>?
                    </h1>

                    <p className='text-justify'>
                        <span className="font-bold">Dojo-Core </span>
                        es el sistema de gestión de Data-Core para academias de artes marciales y
                        deportes de contacto. El escritorio concentra alumnos, pagos, horario, reportes
                        y la configuración de la academia. En el tatami, el instructor usa la app móvil
                        para pasar lista y consultar la ficha. Una página pública permite verificar a
                        un alumno sin mostrar su teléfono, correo ni contacto de emergencia.
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
                        El frontend fue desarrollado principalmente con JavaScript, usando React JS
                        como framework principal. React divide la interfaz en piezas independientes y
                        reutilizables llamadas componentes, lo que facilita el mantenimiento y la
                        escalabilidad del proyecto.
                    </p>
                    <p className='w-1/3'>
                        Tailwind, en su cuarta versión, se encarga del diseño web mediante clases de
                        utilidad con sintaxis similar a CSS. Esto optimiza los tiempos de diseño,
                        mantiene la consistencia visual y mejora el rendimiento, pues solo exporta
                        las clases realmente necesarias.
                    </p>
                    <p className='w-1/3'>
                        Electron empaqueta esa interfaz como aplicación de escritorio para Windows y
                        Linux. El programa se instala en el equipo y puede buscar una versión nueva
                        cuando hay una actualización publicada.
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
                        El backend está en Node.js con Express. Una sola API atiende al escritorio,
                        a la app del instructor y a la página pública de verificación, así que los
                        tres clientes trabajan sobre los mismos alumnos, pagos y clases.
                    </p>

                    <p className='w-1/2'>
                        La base de datos es PostgreSQL, con Prisma como ORM. Prisma modela alumnos,
                        pagos, clases, asistencias y eventos, y evita escribir las consultas SQL a mano.
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
                        La app móvil está hecha con Expo y React Native. El instructor inicia sesión,
                        toma asistencia con la cámara del teléfono, da de alta y edita alumnos, arma
                        el horario del día y registra eventos. Los reportes, las ganancias y la
                        configuración de la academia se quedan en el escritorio.
                    </p>

                    <p className='w-1/2'>
                        La página pública de verificación muestra solo el nombre del alumno y si su
                        pago está al día. El teléfono, el correo y el contacto de emergencia se quedan
                        en la ficha privada, y las secciones sensibles piden la contraseña del administrador.
                    </p>
                </div>
            </div>

            <div className="px-10 pb-4">
                <h2 className="text-2xl font-bold text-center mb-2">Pantallas de la app</h2>
                <p className="text-center text-gray-500 mb-10">
                    Lo que el instructor ve en el teléfono
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pantallasMovil.map((pantalla) => (
                        <div
                            key={pantalla.title}
                            className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                        >
                            <h3 className="font-bold text-lg mb-3 text-center">{pantalla.title}</h3>
                            <img
                                src={pantalla.img}
                                alt={pantalla.alt}
                                onClick={() => setModalImg({ src: pantalla.img, alt: pantalla.alt })}
                                className="h-[28rem] w-full object-contain bg-black rounded-xl shadow-md mb-4 cursor-pointer"
                            />
                            <p className="text-justify text-sm text-gray-600">
                                {pantalla.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-10 py-16">
                <h2 className="text-2xl font-bold text-center mb-2">Funcionalidades</h2>
                <p className="text-center text-gray-500 mb-10">
                    Un vistazo a las principales pantallas del sistema
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
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