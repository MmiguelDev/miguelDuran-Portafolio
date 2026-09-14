import inicio from "../assets/integratorapp/inicio.png"

export default function CalculatorTerminalisCard() {
    return (
        <section>
            <div className="flex flex-col m-10 items-center gap-5" id="inegratorapp">
                <h1 className="font-bold text-3xl text-pink-900">
                    Integrator-App
                </h1>
                <h2>
                    Proyecto escolar.
                </h2>
            </div>

            <div className="flex items-center bg-secundario text-white shadow-lg">
                <div className="flex-col m-10 size-1/2 justify-center">
                    <h1 className="text-center m-2 text-xl">
                        ¿Qué es <span className="font-bold">Integrator-App</span>?
                    </h1>

                    <p className='text-justify'>
                        <span className="font-bold">Integrator-App </span>
                        es una aplicación de escritorio la cual su principal funcionalidad es calcular el area 
                        bajo la curva de una funcion ingresada por el usuario por medio de metodos de aproximación 
                        matemáticos, mostrando como resultado la grafica de la función y el area en unidades cuadradas.
                    </p>
                </div>

                <div className="flex-col m-10 size-1/2 justify-center">
                    <img
                        src={inicio}
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
                    <h2 className='font-semibold'>en el cálculo de la integral.</h2>
                </div>

                <div className='w-3/4 flex gap-12 text-justify'>
                    <p className='w-1/2'>
                        En la logica de la integral se utilizan math.js, esta es una librería que amplifica las 
                        capacidades matemáticas nativas de JavaScript soportando tipos de datos comlpejos como 
                        fracciones, unidades de medida y matrices.
                    </p>

                    <p className='w-1/2'>
                        Por la parte del renderizado de la integral se utiliza anime.js, el cual es una 
                        libreria de animacion ligera que permite crear animaciones por medio de un API,
                        funciona animando casi cada cualquier cosa basada en la web.
                    </p>
                </div>
            </div>
        </section>
    )
}