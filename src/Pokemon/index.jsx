
function Pokemon(props) {
  const { pokemon, testeProps, consoleLog } = props

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>{testeProps}</p>
      <button onClick={consoleLog}>
        Adiciona log
      </button>
    </div>
  )
}

export default Pokemon
