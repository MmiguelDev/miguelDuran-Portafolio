import { useState } from 'react';

import CircularCarousel from '../Components/CircularCarousel';
import ImageModal from '../Components/Modals/ImagenModal';

import app from '../assets/nowplaying/app.png';
import bloqueoGato from '../assets/nowplaying/bloqueo-gato.png';
import escritorioGato from '../assets/nowplaying/escritorio-gato.png';
import bloqueoCalle from '../assets/nowplaying/bloqueo-calle.png';
import escritorioCalle from '../assets/nowplaying/escritorio-calle.png';

const capturas = [
    {
        src: app,
        alt: 'Now Playing con la canción Vaivén y los dos fondos activados',
        title: 'La app',
        subtitle: 'Bloqueo y escritorio',
    },
    {
        src: bloqueoGato,
        alt: 'Pantalla de bloqueo con la portada de Juevecito de Loquera',
        title: 'Pantalla de bloqueo',
        subtitle: 'Juevecito de Loquera',
    },
    {
        src: escritorioGato,
        alt: 'Escritorio con la misma portada detrás de los iconos',
        title: 'Escritorio',
        subtitle: 'La misma portada',
    },
    {
        src: bloqueoCalle,
        alt: 'Pantalla de bloqueo con la portada de Nudo en la Garganta',
        title: 'Otra canción',
        subtitle: 'Nudo en la Garganta',
    },
    {
        src: escritorioCalle,
        alt: 'Escritorio actualizado con la portada de Nudo en la Garganta',
        title: 'Escritorio',
        subtitle: 'Al cambiar de pista',
    },
];

export default function NowPlaying() {
    const [modalImg, setModalImg] = useState(null);

    return (
        <section className="page-enter text-white">
            <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
                <h1 className="text-3xl font-bold">
                    Now <span className="text-emerald-300">Playing</span>
                </h1>
                <h2 className="text-white/80">
                    La canción que suena se queda en el fondo
                </h2>
            </div>

            <div className="mx-auto h-[32rem] w-full max-w-5xl px-2 sm:h-[36rem]">
                <CircularCarousel
                    items={capturas}
                    preset="cylinder"
                    intro="rise"
                    autoplay="drift"
                    cardWidth={210}
                    aspectRatio={0.46}
                    gap={28}
                    captions
                    fadeColor="#0B132B"
                    cornerRadius={22}
                    onItemClick={(item) => setModalImg({ src: item.src, alt: item.alt })}
                />
            </div>

            <div className="flex flex-col items-center bg-secundario text-white shadow-lg lg:flex-row">
                <div className="w-full px-6 py-8 lg:w-1/2 lg:p-10">
                    <h1 className="m-2 text-center text-xl">
                        ¿Qué es <span className="font-bold">Now Playing</span>?
                    </h1>
                    <p className="text-justify">
                        Lee lo que está sonando en el teléfono, toma la portada y la pone
                        como fondo de la pantalla de bloqueo y del escritorio. Cuando la
                        música para, regresa el fondo que había antes. Sirve con Spotify
                        y con cualquier otro reproductor que publique su sesión.
                    </p>
                    <a
                        href="/nowplaying/NowPlaying.apk"
                        download="NowPlaying.apk"
                        className="mt-6 inline-flex items-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-primario transition hover:bg-emerald-300"
                    >
                        Descargar APK
                    </a>
                    <p className="mt-3 text-sm text-white/60">
                        Android 8 o más nuevo. Hay que permitir instalar apps de esta fuente.
                    </p>
                </div>

                <div className="flex w-full justify-center px-6 pb-8 lg:w-1/2 lg:p-10">
                    <img
                        src={app}
                        alt="Pantalla principal de Now Playing"
                        onClick={() => setModalImg({ src: app, alt: 'Pantalla principal de Now Playing' })}
                        className="h-80 cursor-pointer rounded-3xl object-contain shadow-2xl transition-transform duration-300 ease-out hover:scale-105"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-6 px-6 py-10 lg:flex-row lg:items-start lg:px-10">
                <div className="w-full lg:w-1/4">
                    <h1 className="text-2xl font-bold">Tecnologías utilizadas</h1>
                    <h2 className="font-semibold">en el teléfono</h2>
                </div>

                <div className="flex w-full flex-col gap-6 text-justify md:flex-row lg:w-3/4">
                    <p className="md:w-1/3">
                        Kotlin y Jetpack Compose arman la pantalla: la canción actual y los interruptores de bloqueo y escritorio.
                    </p>
                    <p className="md:w-1/3">
                        La sesión de medios del sistema entrega título, artista y portada, sin iniciar sesión en el reproductor.
                    </p>
                    <p className="md:w-1/3">
                        Un servicio en primer plano sigue el cambio de pista con la app en segundo plano y escribe el fondo nuevo.
                    </p>
                </div>
            </div>

            <ImageModal
                isOpen={Boolean(modalImg)}
                src={modalImg?.src}
                alt={modalImg?.alt}
                onClose={() => setModalImg(null)}
            />
        </section>
    );
}
