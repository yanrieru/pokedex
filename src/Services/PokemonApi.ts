import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

// /**
//  * Ambil daftar Pokemon (list)
//  * @param limit - jumlah pokemon yang diambil per request (default: 20)
//  * @param offset - posisi mulai (default: 0)
//  */
export const getPokemonList = async (limit = 20, offset = 0) => {
  const response = await axios.get(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
  return response.data;
};

// /**
//  * Ambil detail Pokemon berdasarkan ID atau nama
//  * @param idOrName - ID (angka) atau nama (string) pokemon
//  */
export const getPokemonDetail = async (idOrName: number | string) => {
  const response = await axios.get(`${API_URL}/pokemon/${idOrName}`);
  return response.data;
};

/**
 * Ambil daftar tipe Pokemon
 */
export const getPokemonTypes = async () => {
  const response = await axios.get(`${API_URL}/type`);
  return response.data;
};
