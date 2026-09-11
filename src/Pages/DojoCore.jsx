import { useState } from 'react';

import login from '../assets/login.png';
import dashboard from "../assets/dashboard.png";
import dasboradAsistencias from "../assets/dasboradAsistencias.png"
import asistenciaQR from "../assets/asistenciaQR.png";
import registrarAlumnos from "../assets/registrarAlumnos.png";
import reportes from "../assets/reportes.png";
import cardAlumno from "../assets/CardAlumno.png";
import editar from "../assets/editar.png";
import protectedView from "../assets/protected.png";
import config from "../assets/config.png";

import ImageModal from '../Components/Modals/ImagenModal';

export default function DojoCore() {

    const [modalImg, setModalImg] = useState(null); // { src, alt } o null

    const features = [
        {
            title: "Dashboard principal",
            img: dashboard,
            alt: "Dashboard principal de Dojo-Core",
            desc: "La aplicación cuenta con un dashboard interactivo que muestra las principales métricas de la academia, como ganancias diarias, semanales y mensuales, gráficas, fechas pendientes y la distribución semanal de las actividades."
        },
        {
            title: "Dashboard de asistencias",
            img: dasboradAsistencias,
            alt: "Dashboard de asistencias de Dojo-Core",
            desc: "Esta herramienta permite tomar asistencia y confirma automáticamente el estado del pago. Si el pago no está actualizado, solicita la confirmación del administrador para continuar con la acción."
        },
        {
            title: "Asistencia por QR",
            img: asistenciaQR,
            alt: "Asistencia por código QR en Dojo-Core",
            desc: "El software permite tomar asistencia mediante códigos QR únicos por alumno, generados automáticamente a partir de su matrícula."
        },
        {
            title: "Registro de alumnos",
            img: registrarAlumnos,
            alt: "Registro de alumnos en Dojo-Core",
            desc: "Permite dar de alta nuevos alumnos de forma rápida, capturando su información y asignándolos a la academia correspondiente."
        },
        {
            title: "Ficha de alumno",
            img: cardAlumno,
            alt: "Ficha individual de alumno en Dojo-Core",
            desc: "Muestra la información detallada de cada alumno en una sola vista, incluyendo su historial y estado dentro de la academia."
        },
        {
            title: "Edición de información",
            img: editar,
            alt: "Edición de datos en Dojo-Core",
            desc: "Facilita la actualización de datos de alumnos, cursos y pagos, manteniendo la información de la academia siempre al día."
        },
        {
            title: "Reportes",
            img: reportes,
            alt: "Reportes y estadísticas de Dojo-Core",
            desc: "Genera reportes visuales sobre el desempeño financiero y operativo de la academia, facilitando la toma de decisiones."
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
            desc: "Permite al administrador personalizar los parámetros generales del sistema, como datos de la academia, precios y otras preferencias, desde un solo lugar."
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
                        es una aplicación de escritorio diseñada para el control centralizado de academias
                        de artes marciales y deportes de contacto. Facilita la administración financiera y
                        la gestión general de la academia, permitiendo que maestros y encargados se
                        enfoquen únicamente en la enseñanza de sus alumnos.
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
                        Electron combina el motor Chromium con Node.js en un solo framework, permitiendo
                        crear aplicaciones de escritorio multiplataforma. Esto une la interfaz web con
                        capacidades de sistema, todo dentro de un mismo entorno de desarrollo.
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
                        Al igual que el frontend, el backend fue desarrollado completamente con JavaScript
                        y sus tecnologías. Para el empaquetado y la gestión de librerías se utilizó
                        Node.js, encargado de la comunicación entre el backend y el frontend.
                    </p>

                    <p className='w-1/2'>
                        En la base de datos se utiliza MySQL como gestor principal, junto con Prisma como
                        ORM. Prisma simplifica la interacción con la base de datos, evitando la necesidad
                        de escribir consultas SQL de manera manual.
                    </p>
                </div>
            </div>

            {/* Galería de funcionalidades */}
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