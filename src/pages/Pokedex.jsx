import { useSelector } from "react-redux"
import PokemonList from "../components/PokemonList";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

const Pokedex = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);
  const trainerName = useSelector((store) => store.trainerName);
  const pokemonsByName = allPokemons.filter((pokemon) => pokemon.name.includes(pokemonName));

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.target.pokemonName.value.toLowerCase().trim());
  }


  const handleChangeType = (e) => {
    const url = e.target.value;
    axios.get(url)
      .then(({ data }) => {

        if (url.includes("type")) {
          const pokemonsFormatted = data.pokemon.map((pokemon) => pokemon.pokemon);
          setAllPokemons(pokemonsFormatted);
        } else {
          setAllPokemons(data.results)
        }
      }
      )
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1292")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err))
  }, []);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type")
      .then(({ data }) => setTypes(data.results))
      .catch((err) => console.log(err))
  }, [])
  return (
    <section>
      <Header />
      <main >
        <div className="pb-4 justify-self-center pl-6">
          <p className="text-lg p-4 font-inter">
            <b className="text-red-600 font-bold">Welcome {trainerName}</b>
            , here can you find your favorite pokemons
          </p>
        </div>

        <form
          className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2 pl-10 pr-10 gap-3 xl:max-w-[1200px] xl:justify-center  xl:mx-auto "
          onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 max-sm:max-w-[390px] " >
            <input
              className="col-span-2  text-black/35 text-base font-medium shadow-xl pt-2 pb-2 pl-6 pr-6"
              name="pokemonName"
              placeholder="Search pokemon..." type="text" />
           
              <button
                className="w-full bg-red-500 text-white p-2 font-bold border-2 border-red-500"
              >Search</button>
            

          </div>
          <select
            className="max-sm:text-center max-sm:place-self-stretch p-2 max-sm:max-w-[390px] text-black/80 text-base font-medium shadow-xl"
            onChange={handleChangeType}>
            <option value="https://pokeapi.co/api/v2/pokemon?limit=1292">
              All pokemons
            </option>
            {
              types.map((type) => (
                <option className="capitalize" key={type.name} value={type.url}>{type.name}</option>
              ))
            }
          </select>
        </form>
        <PokemonList pokemons={pokemonsByName} />
      </main>
    </section>
  )
}
export default Pokedex