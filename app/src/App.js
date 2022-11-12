import'./App.css'
import { useState } from 'react';
import axios from 'axios';


const App = () => {
  const [pokemonName, setPokemonName] = useState("")
  const [selectPokemon, setSelectPokemon] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState({
    name: "",
    species: "",
    img: "",
    type: ""
  })

  const search = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((Response) => {
      setPokemonInfo({
        name : pokemonName,
        species : Response.data.species.name,
        img : Response.data.sprites.front_default,
        type : Response.data.types[0].type.name
      })
      setSelectPokemon(true)
      
    }
    ) 
  }

  return (
  <div className='App'><div className = "Title">
    <h1>My Pokemon</h1>
    <input type = "text" onChange={(event) => {
      setPokemonName(event.target.value)
      }}
      />
    <button onClick={search}>Find Pokemon!</button>
  </div>
  <div className='Display'>{!selectPokemon ? (<h2>select pokemon</h2>) :
  <>
       <h2>{pokemonInfo.name}</h2>
       <img src={pokemonInfo.img}/>
       <h2>Species : {pokemonInfo.species}</h2>
       <h2>Type : {pokemonInfo.type}</h2>
  </>
  
  }
  </div>
  </div>
  );
};

export default App;
