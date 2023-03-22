import Pokemon from './Pokemon'
import { useEffect, useState } from 'react'
import pokeApi from './apiPokemon'

function App() {
  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    pokeApi.get('/pokemon').then(response => {
      setPokemons(response.data)
    })
  }, [])

  return (
    <div className="App">
      {pokemons && pokemons.results.map(pokemon => (
        <>
          <Pokemon pokemon={pokemon} testeProps={'teste'} consoleLog={() => console.log('logou')} />
          <p>teste</p>
        </>
      ))}
    </div>
  )
}

export default App
