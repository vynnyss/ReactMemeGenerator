import React from 'react'
import "./css/forms.css"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName:"", 
        lastName:"",
        email:"",
        comments:"",
        clicado:true,
        estadoCivil:"",
        favColor:"",
    }
    )

    function handleChange(event){

        setFormData(prevFormData => {
            const {name, value, type, checked} = event.target
            return{
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type='text'
            placeholder='First Name'
            onChange={handleChange}
            name='firstName'
            value={formData.firstName}
        />
        <input 
            type='text'
            placeholder='Last Name'
            onChange={handleChange}
            name='lastName'
            value={formData.lastName}
        />
            <input 
            type='email'
            placeholder='myemail@email.com'
            onChange={handleChange}
            name='email'
            value={formData.email}
        />
        <textarea
            value={formData.comments}
            name='comments' 
            placeholder='Comments' 
            onChange={handleChange}/>
        <br/>
        <input 
            type='checkbox' 
            id='foiClicado' 
            checked={formData.clicado} 
            name='clicado'
            onChange={handleChange}/>
            
        <label htmlFor='foiClicado'>clicou no botão?</label>
        <br/>
        <br/>
        <fieldset>
            <legend>Estado Civil</legend>

            <input
                type='radio'
                id='solteiro(a)'
                name='estadoCivil'
                value='solteiro(a)'
                onChange={handleChange}
                checked={formData.estadoCivil === "solteiro(a)"}
            />
            <label htmlFor='solteiro(a)'>solteiro(a)</label>
            
            <input
                type='radio'
                id='casado(a)'
                name='estadoCivil'
                value="casado(a)"
                onChange={handleChange}
                checked={formData.estadoCivil === "casado(a)"}
            />
            <label htmlFor='casado(a)'>casado(a)</label>

            <input
                type='radio'
                id='viuvo(a)'
                name='estadoCivil'
                value='viuvo(a)'
                onChange={handleChange}
                checked={formData.estadoCivil === "viuvo(a)"}
            />
            <label htmlFor='viuvo(a)'>viuvo(a)</label>
        </fieldset>
        <br/>
        <br/>
        <label htmlFor='favColor'>Favorite Color</label>
        <select 
            id="favColor"
            value={formData.favColor}
            name="favColor" 
            onChange={handleChange}    
        >
            <option value="" >--Chose--</option>
            <option value="Red" >Red</option>
            <option value="Blue" >Blue</option>
            <option value="Green" >Green</option>
            <option value="Orange" >Orange</option>
            <option value="Indigo" >Indigo</option>
            <option value="Violet" >Violet</option>
        </select>
        <br/>
        <br/>
        <button>Submit</button>

    </form>
  )
}
