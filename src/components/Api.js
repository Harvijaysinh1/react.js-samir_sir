import axios from "axios";
import React from "react";

export const Api =()=>{
    const getData = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
      console.log(res.data[2]);}).catch((e)=>{
        console.log(e);
      })
      }
    const postData = ()=>{
        let obj={
            title:"yyy",
            body:'hahahaha'
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',obj).then(res=>{
      console.log(res)}).catch((e)=>{
        console.log(e);
      })
      }
    const deleteData = ()=>{
        let id=2;
        axios.delete(`https://reqres.in/api/users`+id).then(res=>{
      console.log(res.status)}).catch((e)=>{
        console.log(e);
      })
      }
    const updateData = ()=>{
        let id=2;
        let obj={
            name:'raj',
            job:'cricket'
        }
        axios.put(`https://reqres.in/api/users`+id,obj).then(res=>{
      console.log(res)}).catch((e)=>{
        console.log(e);
      })
      }

      return(
        <div>
        <button className="btn" onClick={getData}>Data</button>
        <button className="btn" onClick={postData}>post</button>
        <button className="btn" onClick={deleteData}>Delete</button>
        <button className="btn" onClick={updateData}>Update</button>
      </div>
      )

}