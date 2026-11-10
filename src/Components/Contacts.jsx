import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function references() {
    return (
        <footer className="flex flex-wrap justify-center gap-2 border-t border-white/10 bg-secundario/80 text-white backdrop-blur-md">
            <a className="contact-link" href="mailto:migueldur290607@gmail.com">
                <BiLogoGmail />
                <h3>migueldur290607@gmail.com</h3>
            </a>

            <a className="contact-link" href="https://wa.me/526141322895" target="_blank" rel="noreferrer">
                <IoLogoWhatsapp />
                <h3>+52 614 132 2895</h3>
            </a>

            <a className="contact-link" href="https://github.com/MmiguelDev" target="_blank" rel="noreferrer">
                <FaGithub />
                <h3>MmiguelDev</h3>
            </a>
        </footer>
    )
}
