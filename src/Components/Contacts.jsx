import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";


export default function references() {
    return (
        <footer className="bg-secundario text-white flex gap-6 justify-center">
            <div className="flex gap-1 items-center p-4 font-bold">
                <BiLogoGmail />
                <h3> migueldur290607@gmail.com </h3>
            </div>

            <div className="flex gap-1 items-center p-4 font-bold">
                <IoLogoWhatsapp />
                <h3> +52 614 132 2895 </h3>
            </div>

            <div className="flex gap-1 items-center p-4 font-bold">
                <FaGithub />
                <h3> MmiguelDev </h3>
            </div>
        </footer>
    )
}