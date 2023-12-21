import { useParams } from "react-router-dom"
import Header from "../components/Header"
import { useEffect, useState } from "react";
import axios from "axios";
import { gradientsByType } from "../constants/pokemon";

const PokemonDetail = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(({ data }) => setPokemonInfo(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <section >
      <Header />
      <section className="grid h-full" >
      <article className="grid justify-self-center gap-1 max-sm:w-[300px] w-[500px] max-w-[800px] shadow-xl rounded-lg text-center pt-24">
        <header className={`bg-gradient-to-b ${gradientsByType[pokemonInfo?.types[0].type.name]} relative h-[140px] rounded-t-lg`} >
          <img className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[300px] p-11" src={pokemonInfo?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <div className="text-center">
          <span className="inline-block w-10 border-2 border-slate-200 text-slate-500 "># {pokemonInfo?.id}</span>
        </div>

        <div className="relative inline-block group">
          <h3 className="capitalize text-lg font-bold relative z-10 inline-block px-4 bg-white" >{pokemonInfo?.name}</h3>
          <div className="absolute inset-y-[14px] inset-x-[60px] h-[2px] bg-slate-200 "></div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center text-sm pb-3" >
          <div>
            <h5>Weight</h5>
            <span>{pokemonInfo?.weight}</span>
          </div>
          <div>
            <h5>Heihgt</h5>
            <span>{pokemonInfo?.height}</span>
          </div>
        </div>
        <section>
          <h4 className="capitalize text-lg font-bold text-start pl-10">Stats</h4>
          <ul className="grid gap-3 p-10">
            {
              pokemonInfo?.stats.map((stat) =>
                <li key={stat.stat.name}>
                  <div className="flex justify-between">
                    <h5 className="capitalize">{stat.stat.name}</h5>
                    <span>{stat.base_stat}/ 255 </span>
                  </div>
                  <div>
                    <div className="h-6 bg-slate-200 rounded-md overflow-hidden">
                      <div style={{
                        width: `${stat.base_stat / 255 * 100}%`,
                      }} className="h-full bg-gradient-to-r from-orange-400 to-yellow-400 ">
                      </div>
                    </div>
                  </div>
                </li>
              )
            }
          </ul>
        </section>
      </article>
      </section>
    </section>
  )
}
export default PokemonDetail