import { Link, useMatch } from "@tanstack/react-location";
import { usePokemon } from "../../store";

export function PokemonDetail() {
  const {
    params: { id },
  } = useMatch();
  const { pokemon } = usePokemon();

  const pokemonData = pokemon.find((p) => p.id === +id);

  if (!pokemonData) {
    return <div>No pokemon data!</div>;
  }

  return (
    <div className="mt-3">
      <Link to="/">
        <h1 className="text-2xl font-bold mb-5">&lt; Home</h1>
      </Link>
      <div className="grid grid-cols-2">
        <img
          className="w-96 h-96 flex-shrink-0 mx-auto bg-black rounded-xl"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
          alt=""
        />
        <div className="ml-3">
          <h2 className="text-wxl font-bold">{pokemonData.name}</h2>
          <div className="mt-3">
            <h3 className="text-xl font-bold">Stats</h3>
            <ul className="mt-3">
              {[
                "hp",
                "attack",
                "defense",
                "special_attack",
                "special_defense",
                "speed",
              ].map((stat) => (
                <li key={stat} className="grid grid-cols-2">
                  <span className="font-bold">{stat}</span>
                  <span>{pokemonData[stat]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
