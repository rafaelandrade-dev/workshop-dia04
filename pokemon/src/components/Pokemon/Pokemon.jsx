import { useState } from "react"
import axios from 'axios'

function Pokemon(){

    const [pokemon, setPokemon] = useState("vazio")
    const [varios, setVarios] = useState("nenhum")

    const getVarios = async ()=>{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`)

        setVarios(response.data.results)
    }

    const getPokemon = async ()=> {

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        
        setPokemon(response.data)

        console.log(response)

    }

    return(

        <div>

            <button onClick={getPokemon}>PESQUISAR</button>
          

            {
                pokemon === "vazio" ?

                    <h2>Nada pesquisado ainda...</h2>

                    :
                    <div>
                        <h2>Resultados da pesquisa</h2>
                        <p>Nome: {pokemon.name}</p>
                        <p>Peso: {pokemon.weight}</p>
                        <p>Altura: {pokemon.height}0 centímetros</p>
                        <p>Tipo: {pokemon.types[0].type.name}</p>

                        {pokemon.stats.map ((item)=> 
                            <p>{item.stat.name } <progress value={item.base_stat} max="150"></progress>{item.base_stat}</p>
                        )}
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            
                    </div>

                    
                }
              <button onClick={getVarios}>PESQUISAR VÁRIOS</button>

              {varios !== "nenhum" &&(

                <select>
                    {varios.map((item, index)=>(
                        <option key={index}>{item.name}</option>
                    ))}
                </select>
              )}
        </div>


    )
}

export default Pokemon