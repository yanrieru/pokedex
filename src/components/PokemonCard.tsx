interface PokemonCardProps {
  id: number;
  name: string;
  onClick?: (id: number) => void;
}

export default function PokemonCard({ id, name, onClick }: PokemonCardProps) {
  return (
    <div
      onClick={() => onClick && onClick(id)}
      className="group relative flex flex-col items-center justify-center
                 bg-[#FFF3A3] rounded-2xl p-4 border border-red-300
                 shadow-[0_4px_12px_rgba(255,0,0,0.1)]
                 hover:shadow-[0_8px_20px_rgba(255,0,0,0.2)]
                 transition-all duration-300 hover:scale-105"
    >
      {/* ID Pokémon */}
      {/* <span className="absolute top-2 left-3 text-xs font-semibold text-gray-700 opacity-80">#{id}</span> */}

      {/* Gambar Pokémon */}
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={name}
        className="w-[100px] h-[100px] object-contain mb-2 drop-shadow-[0_3px_6px_rgba(0,0,0,0.2)]
                   group-hover:drop-shadow-[0_6px_10px_rgba(255,0,0,0.3)]
                   transition-all duration-300"
      />

      {/* Nama Pokémon */}
      <h2 className="capitalize font-bold text-white text-lg tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">{name}</h2>

      {/* Garis dekoratif di bawah nama */}
      <div className="w-10 h-[3px] mt-1 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 opacity-80 group-hover:opacity-100 transition" />
    </div>
  );
}
