import React from 'react'

export default function StarWars() {

    const [starWarsData, setStawWarsData] = React.useState({})

    const [count, setCount] = React.useState(1)


//    ao usar fetch aqui será gerado um "loop infinito"
//    será buscada a informação na api, apos isso irá
//    atualizar o starWarsData o que irá causar o componente
//    renderizar o que fará buscar a informação na api
//    novamente o que irá causar o componente renderizar etc...
//    fetch("https://swapi.dev/api/people/1")
//        .then(res => res.json())
//        .then(data => setStawWarsData(data))

function handleChangeCount(){
  setCount(prevCount => (prevCount + 1))
}

console.log("app rendered")
//    side effect
    React.useEffect(function() {
      fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStawWarsData(data))
      console.log("effect ran")
        
    }, [count])

  return (
    <div>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        <button onClick={handleChangeCount}>next character</button>
    </div>
  )
}
