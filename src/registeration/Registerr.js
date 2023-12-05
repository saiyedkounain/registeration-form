import React, { useState } from 'react'

const Registerr = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [submitted,setSubmitted] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(name==='' || email === '' || phone == ''){
            alert("Fill all")
        }else {
            setSubmitted(true)
        }
    }
    const successMsg = ()=>{
        if (submitted){

            return(
                <div>
                    <p> User {name} registered successfully</p>
                </div>
            )
        }
    }
  return (
    <div>
        <div>
            {successMsg()}
        </div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)}/> <br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/><br />
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" value={phone}onChange={(e)=> setPhone(e.target.value)}/><br />

        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Registerr
