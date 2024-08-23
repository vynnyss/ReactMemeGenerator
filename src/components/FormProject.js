import React from 'react'
import "./css/forms.css"

export default function FormProject() {
    const [formData, setFormData] = React.useState({
        email:"",
        password:"",
        confirmPassword:"",
        joinNews: false,
    })

    function handleChange(event){
        setFormData(prevFormData => {
            const {name,type,value,checked} = event.target
            return{
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    };

    function handleSubmit(event){
        event.preventDefault()
        if (formData.password === formData.confirmPassword) {
            console.log("Successfully signed up")
            if (formData.joinNews) {
                console.log("Thanks for signing up for our newsletter")
            }
        } else {
            console.log("Passwords do not match")
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Email' onChange={handleChange} name='email' value={formData.email}/>
        <input type='password' placeholder='Password' onChange={handleChange} name='password' value={formData.password}/>
        <input type='password' placeholder='Confirm password' onChange={handleChange} name='confirmPassword'value={formData.confirmPassword}/>
        <label htmlFor='checknews'>I want to join the newsletter</label>
        <input type='checkbox' id='checkNews' onChange={handleChange} name="joinNews" checked={formData.joinNews}/>
        <button>Sign up</button>
    </form>
  )
}
