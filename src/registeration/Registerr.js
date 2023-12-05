import React, { useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

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
    <div className='container container-fluid border mt-3'>
        <h2 className='text-center'>Register</h2>
        <div className='bg-success'>
            {successMsg()}
        </div>
      <form className='p-5 conatiner' >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)} className='m-1'/> <br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} className='m-1'/><br />
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" value={phone}onChange={(e)=> setPhone(e.target.value)} className='m-1'/><br />

        <button type='submit' onClick={handleSubmit}
        className='btn btn-success'
        >Submit</button>
      </form>
    </div>
  )
}

export default Registerr
