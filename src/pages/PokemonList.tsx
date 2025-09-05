import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import PokemonCard from "../components/PokemonCard";
import { usePokemon } from "../hooks/UsePokemon";

export default function PokemonList() {
  const [page, setPage] = useState(1);
  const limit = 30; // jumlah Pokemon per halaman
  const offset = (page - 1) * limit;

  const { pokemonList, totalCount } = usePokemon(limit, offset);
  const [searchTerm, setSearchTerm] = useState("");

  const maxPage = Math.ceil(totalCount / limit);

  // Filter Pokemon berdasarkan input
  const filteredList = pokemonList.filter((pokemon) => pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center relative">
        Pokedéx
        <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-gradient-to-r from-red-500 to-yellow-400 transform -translate-x-1/2 rounded"></span>
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none"
        />
      </div>

      {/* Grid List */}
      {filteredList.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredList.map((pokemon) => (
            <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">
          No Pokémon found matching "<span className="font-semibold">{searchTerm}</span>"
        </p>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium
                     bg-red-500 text-white shadow-md transition
                     hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          <RiArrowLeftSLine size={20} />
          Prev
        </button>

        <span className="font-semibold text-gray-700 dark:text-gray-200">
          Page {page} of {maxPage}
        </span>

        <button
          className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium
               bg-red-500 text-white shadow-md transition
               hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= maxPage}
        >
          Next
          <RiArrowRightSLine size={20} />
        </button>
      </div>
    </div>
  );
}
