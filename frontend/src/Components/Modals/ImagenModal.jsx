import { useEffect } from 'react';

export default function ImageModal({ isOpen, onClose, src, alt }) {

    // Cierra el modal con la tecla Escape
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape') onClose();
        }

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // evita scroll del fondo mientras el modal está abierto
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white text-4xl leading-none hover:text-gray-300 transition-colors cursor-pointer"
                aria-label="Cerrar"
            >
                &times;
            </button>

            <img
                src={src}
                alt={alt}
                onClick={(e) => e.stopPropagation()} // evita que el click en la imagen cierre el modal
                className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl animate-scaleIn"
            />
        </div>
    );
}