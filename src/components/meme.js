import React from 'react'
import "./css/meme.css"

export default function Meme() {

    //const [var1, funcao] = React.useState()
    /**
     * Sempre que utilizar valor antigo de um react state
     * para determinar o novo valor, passar como uma 
     * função para a função setState ao inves de utilizar o 
     * state diretamente, essa função irá receber o valor antigo
     * como parametro, com o qual poderá ser determinado o
     * novo valor do state(pode ser uma (função(prevState){})
     * ou uma arrow function (prevState => ))
     */
    
/**    const [value, setValue] = React.useState(0)

    function add(){
      setValue(prevValue => prevValue + 1)
    }
    function subtract(){
      setValue(function(prevValue){
        return prevValue - 1
      })
   const [isGoingOut, setIsGoingOut] = React.useState("yes")

      function changeGoingOut(){
        isGoingOut === "yes" ? setIsGoingOut("no") : setIsGoingOut("yes")     
    }
    const [isShown, setIsShown] = React.useState(false)

    function toggle(){setIsShown(prevIsShown => !prevIsShown)}
    } */




    const [allMemeImages, setALLMemeImages] = React.useState([])

    const [meme, setMeme] =  React.useState({
      topText: "",
      bottomText: "",
      randomImage: "",
    })

    React.useEffect(function(){
      async function getMemes(){
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setALLMemeImages(data.data.memes)
      }
      getMemes()
    }, [])

    function randomMeme(){
        const index = Math.floor(Math.random() *  allMemeImages.length)
        const image = allMemeImages[index].url
        console.log(image)
        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: image
        }))
    };

    function handleChange(event){
      const {name, value} = event.target
      setMeme(prevMeme => ({
        ...prevMeme,
        [name] : value
      }))
    }

  return (
    <main>
        <div className='form'>
            <input 
              type='text' 
              className='form--input' 
              placeholder='Top text' 
              name='topText' 
              value={meme.topText}
              onChange={handleChange}
            />
            <input 
              type='text' 
              className='form--input' 
              placeholder='Bottom text' 
              name='bottomText' 
              value={meme.bottomText}
              onChange={handleChange}
            />
            <button className='form--submit' onClick={randomMeme}>Get a new meme image</button>
        </div>
        <div className='meme'>
          <img src={meme.randomImage} alt='' className='memeImage'/>
          <h2 className='meme--text top'>{meme.topText}</h2>
          <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        </div>
        



{/**        <br/>
        <br/>
        <div>
          <button onClick={subtract}>-</button>
          <h1>{value}</h1>
          <button onClick={add}>+</button>
        </div>
        
        <div>
          <h1>{isGoingOut}</h1>
          <button onClick={changeGoingOut}>mudar</button>
        </div>

        <div>
          <br/>
          <br/>
          <button onClick={toggle}>Show</button>
          {isShown && <img src={meme.randomImage} alt='' className='memeImage'/>}
        </div>
        
        */}
    </main>
  )
}


