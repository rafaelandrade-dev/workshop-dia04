import {BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'

import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Pokemon from "./components/Pokemon/Pokemon"


function App() {

  //https://pokeapi.co/api/v2/pokemon/pikachu


  return (
    <Router>
      
      <Header/>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/pokemon' element={<Pokemon/>}/>
        
        </Routes>

    




    </Router>
  )
}

export default App
