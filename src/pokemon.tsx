// import { useEffect, useState } from "react";
// import axios from "axios";

// interface Pokemon {
//   name: string;
//   url: string;
// }

// export default function ListPokemon() {
//   const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
//   const [loading, setLoading] = useState(true);

//   const getPokemon = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
//       setPokemonList(response.data.results);
//     } catch (error) {
//       console.error("Error fetching Pokemon:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getPokemon();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center text-red-500 text-lg font-semibold py-10 animate-pulse">
//         Loading Pokémon...
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-6">
//       <h1 className="text-3xl font-extrabold text-red-600 mb-6 text-center relative">
//         List of Pokémon
//         <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-gradient-to-r from-red-500 to-yellow-400 transform -translate-x-1/2 rounded"></span>
//       </h1>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//         {pokemonList.map((pokemon, index) => (
//           <div
//             key={index}
//             className="bg-yellow-100 rounded-2xl shadow-md p-4 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
//           >
//             <span className="text-xs text-gray-600 font-semibold">
//               #{index + 1}
//             </span>
//             <img
//               src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
//               alt={pokemon.name}
//               className="w-20 h-20 my-2 drop-shadow-md"
//             />
//             <h2 className="capitalize font-semibold text-red-600">
//               {pokemon.name}
//             </h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
