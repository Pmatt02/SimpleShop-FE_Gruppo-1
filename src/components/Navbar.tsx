import { Home, ShoppingCart } from "lucide-react";
import logoImg from "@/assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo immagine a sinistra */}
      <div>
        <img src={logoImg} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Link al centro per homepage */}
      <div className="flex items-center gap-8">
        <Link
          to={"/"}
          className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium text-lg"
        >
          <Home className="w-5 h-5" />
          Home
        </Link>
      </div>

      {/* Carrello a destra */}
      <div>
        <Link to={'/cart'}>
          <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
}
