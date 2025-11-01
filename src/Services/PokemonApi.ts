import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

/**
 * Ambil daftar Pokémon (list)
 * @param limit - jumlah Pokémon per halaman (default: 20)
 * @param offset - posisi mulai (default: 0)
 */
export const getPokemonList = async (limit = 20, offset = 0) => {
  try {
    const { data } = await axios.get(`${API_URL}/pokemon`, {
      params: { limit, offset },
    });
    return data;
  } catch (error) {
    console.error("❌ Gagal mengambil daftar Pokémon:", error);
    throw error;
  }
};

/**
 * Ambil detail Pokémon berdasarkan ID atau nama
 * @param idOrName - ID (angka) atau nama (string) Pokémon
 */
export const getPokemonDetail = async (idOrName: number | string) => {
  try {
    const { data } = await axios.get(`${API_URL}/pokemon/${idOrName}`);
    return data;
  } catch (error) {
    console.error(`❌ Gagal mengambil detail Pokémon (${idOrName}):`, error);
    throw error;
  }
};

/**
 * Ambil daftar tipe Pokémon (misalnya Fire, Water, Grass, dll)
 */
export const getPokemonTypes = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/type`);
    return data;
  } catch (error) {
    console.error("❌ Gagal mengambil daftar tipe Pokémon:", error);
    throw error;
  }
};
