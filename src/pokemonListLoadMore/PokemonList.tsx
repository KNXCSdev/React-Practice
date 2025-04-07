import { useEffect, useState } from "react";

export default function PokemonList() {
  const [showNumResults, setShowNumResults] = useState(5);
  const [pokemonList, setPokemonList] = useState([]);
  const [allPokemonList, setAllPokemonList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=11&offset=0`,
      );
      const data = await res.json();

      setAllPokemonList(data.results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (allPokemonList.length > 0) {
      setPokemonList(allPokemonList.slice(0, showNumResults));
    }
  }, [allPokemonList, showNumResults]);

  return (
    <div className="flex flex-col gap-8">
      <ul>
        {pokemonList.map((pokemon: { name: string }, index) => (
          <li
            key={index}
            className="flex h-20 w-full items-center justify-center border text-6xl"
          >
            {pokemon?.name}
          </li>
        ))}
      </ul>
      <div>
        Displaying {showNumResults} of {allPokemonList.length} results
      </div>
      {allPokemonList.length > showNumResults && (
        <button
          className="mx-auto border border-black px-8 py-2 text-3xl text-black"
          onClick={() => {
            setShowNumResults((prev) =>
              Math.min(prev + 5, allPokemonList.length),
            );
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
}
