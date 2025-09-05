import { useEffect, useState } from "react";
import { getPokemonList } from "../Services/PokemonApi";

interface Pokemon {
  name: string;
  url: string;
  id: number; // ID Pokemon diambil langsung dari URL API
}

export function usePokemon(limit = 20, offset = 0) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemonList(limit, offset);

      // Simpan total Pokemon untuk pagination
      setTotalCount(data.count);

      // Tambahkan ID akurat dari URL API
      const withId = data.results.map((p: { name: string; url: string }) => {
        const id = Number(p.url.split("/").filter(Boolean).pop());
        return { ...p, id };
      });

      setPokemonList(withId);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [limit, offset]);

  return { pokemonList, loading, totalCount };
}
