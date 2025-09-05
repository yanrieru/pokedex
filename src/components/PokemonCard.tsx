interface PokemonCardProps {
  id: number;
  name: string;
}

export default function PokemonCard({ id, name }: PokemonCardProps) {
  return (
    <div className="bg-yellow-100 rounded-2xl shadow-md p-4 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
      <span className="text-xs text-gray-600 font-semibold">#{id}</span>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={name}
        className="w-20 h-20 my-2 drop-shadow-md"
      />
      <h2 className="capitalize font-semibold text-black-600">{name}</h2>
    </div>
  );
}
