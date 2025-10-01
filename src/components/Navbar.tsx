import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SiPokemon } from "react-icons/si";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="relative w-full">
      {/* Setengah lingkaran background */}
      <div className="w-full h-40 bg-red-500 rounded-b-[60px] flex flex-col items-center justify-center shadow-md">
        {/* Logo Pokedex + Pokeball */}
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            Pokedéx
          </h1>
          <SiPokemon className="text-white w-8 h-8" />
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-11/12 max-w-md shadow">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search your Pokémon..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-700"
          />
        </div>
      </div>
    </header>
  );
}
