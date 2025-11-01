import { useState, useEffect } from "react";
import { usePokemon } from "../hooks/UsePokemon";
import { getPokemonDetail } from "../Services/PokemonApi";
import { FiArrowRight } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";
import PokemonCard from "../components/PokemonCard";

interface PokemonListProps {
  searchTerm: string;
}

export default function PokemonList({ searchTerm }: PokemonListProps) {
  const [page, setPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);
  const [pokemonDetail, setPokemonDetail] = useState<any>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const limit = 30;
  const offset = (page - 1) * limit;

  const { pokemonList, totalCount } = usePokemon(limit, offset);
  const maxPage = Math.ceil(totalCount / limit);

  // Filter berdasarkan input search dari Navbar
  const filteredList = pokemonList.filter((pokemon) => pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  // Ambil detail Pokémon saat kartu diklik
  useEffect(() => {
    if (!selectedPokemon) return;

    const fetchDetail = async () => {
      setLoadingDetail(true);
      setPokemonDetail(null);
      try {
        const data = await getPokemonDetail(selectedPokemon);
        setPokemonDetail(data);
      } catch (error) {
        console.error("Gagal mengambil data detail Pokémon:", error);
      } finally {
        setLoadingDetail(false);
      }
    };

    fetchDetail();
  }, [selectedPokemon]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Grid List */}
      {filteredList.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredList.map((pokemon) => (
            <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} onClick={() => setSelectedPokemon(pokemon.id)} />
          ))}
        </div>
      ) : (
        <p className="text-center text-white mt-6">
          No Pokémon found matching <span className="font-semibold">{searchTerm}</span>
        </p>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          className="flex items-center gap-1 px-4 py-2 rounded-xl font-medium
                     bg-red-500 text-white shadow-md transition
                     hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          <IoArrowBackOutline size={20} />
          Prev
        </button>

        <span className="font-semibold text-gray-300 dark:text-gray-200">
          Page {page} of {maxPage}
        </span>

        <button
          className="flex items-center gap-1 px-4 py-2 rounded-xl font-medium
                     bg-red-500 text-white shadow-md transition
                     hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= maxPage}
        >
          Next
          <FiArrowRight size={20} />
        </button>
      </div>

      {/* Modal Detail Pokémon */}
      {selectedPokemon && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setSelectedPokemon(null)}>
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md text-center shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            {/* Tombol close */}
            <button onClick={() => setSelectedPokemon(null)} className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl font-bold">
              ✕
            </button>

            {/* Isi modal */}
            {loadingDetail ? (
              <p className="text-gray-600 mt-10">Loading Pokémon data...</p>
            ) : pokemonDetail ? (
              <>
                <h2 className="text-2xl font-bold text-red-600 mb-2 capitalize">{pokemonDetail.name}</h2>

                <img src={pokemonDetail.sprites?.other["official-artwork"].front_default || pokemonDetail.sprites?.front_default} alt={pokemonDetail.name} className="w-40 h-40 mx-auto mb-3" />

                <div className="text-gray-700 space-y-1">
                  <p>
                    <span className="font-semibold text-red-600">Type:</span> {pokemonDetail.types.map((t: any) => t.type.name).join(", ")}
                  </p>
                  <p>
                    <span className="font-semibold text-red-600">Height:</span> {pokemonDetail.height / 10} m
                  </p>
                  <p>
                    <span className="font-semibold text-red-600">Weight:</span> {pokemonDetail.weight / 10} kg
                  </p>
                  <p>
                    <span className="font-semibold text-red-600">Abilities:</span> {pokemonDetail.abilities.map((a: any) => a.ability.name).join(", ")}
                  </p>
                </div>
              </>
            ) : (
              <p className="text-gray-600 mt-10">Failed to load Pokémon details.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
