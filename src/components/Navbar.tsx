import { ShoppingCart } from "lucide-react";
import logoImg from "@/assets/logo.png";


export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
            {/* Logo immagine a sinistra */}
            <div>
                <img src={logoImg} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Link al centro per homepage */}
            <div>
                <a href="/" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                    Home
                </a>
            </div>


            {/* Carrello a destra */}
            <div>
                <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer" />
            </div>
        </nav>
    );
}
