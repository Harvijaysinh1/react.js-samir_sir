import axios from "axios"
import React from "react"
import { useState } from "react"


export const Api2=()=>{
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    
    const nameHandler =(e)=>{
        setname(e.target.value)
    }
    const emailHandler=(e)=>{
        setemail(e.target.value)
    }
    const submit=async(e)=>{
        e.preventDefault()
        let obj={
            email:email,
            first_name:name
            
        }
        let res=await axios.post('https://reqres.in/api/users',obj)
        console.log(res.data);
    }
return (
    <div className="container">
        <form onSubmit={submit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input onChange={(e)=>{nameHandler(e)}} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input onChange={(e)=>{emailHandler(e)}} type="email" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>

)
}