import { useState } from "react"
import axios from 'axios'

function Pokemon(){

    const [pesquisa, setPesquisa] = useState()
    const [pokemon, setPokemon] = useState("vazio")

    const getPokemon = async ()=> {

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu/${nome}`)
        
        setPokemon(response.data)

        console.log(response)

    }

    return(


        
      
        <div>
            <input type="text" onChange={(e)=> setPesquisa(e.target.value)}/>
            <button onClick={getPokemon(pesquisa)}>BOTAO</button>

            {
                pokemon === "vazio" ?
                <h2>Carregando...</h2>

                :

                <p>{pokemon.name}</p>
            }

        </div>


    )
}

export default Pokemon