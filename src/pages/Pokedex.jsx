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

        if(url.includes("type")){
          const pokemonsFormatted = data.pokemon.map((pokemon) => pokemon.pokemon);
          setAllPokemons(pokemonsFormatted);
        }else{
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
        <div className="pb-4 pl-10">
        <p className="text-lg">
          <b className="text-red-600 font-bold ">Welcome {trainerName}</b>
          , here can you find your favorite pokemons
        </p>
        </div>
        
        <form 
        className="pl-10 grid grid-cols-2 pt-1 pr-2"
        onSubmit={handleSubmit}>
          <div  >
            <input
              className="p-2 max-sm:w-[140px] text-black/35 text-base font-medium border-black-400/ border-2 pt-2 pb-2 pl-6 pr-6"
              name="pokemonName"
              placeholder="Search pokemon..." type="text" />
            <button
            className="max-sm:w-[65px] bg-red-400 text-white p-2 font-bold "
            >Search</button>
            </div>
          <select 
          className="p-2 max-sm:w-[150px] text-black/35 text-base font-medium border-black-400/ border-2 pt-2 pb-2 pl-6 pr-6"
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