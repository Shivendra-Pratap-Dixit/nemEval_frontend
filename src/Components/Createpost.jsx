import React from 'react'
import { useState } from 'react'

const Createpost = () => {
  const [title,setTitle]=useState("")
  const [body,setbody]=useState("")
  const [device,setdevice]=useState("")
  const [no_of_comments,setComments]=useState(0)
  const handleCr=()=>{
    const payload={
      title,body,device,no_of_comments
    }
//     fetch("https://ill-jade-angler-sari.cyclic.app/posts/add",{
//       headers:{
// "Content-type":"application/json",
// "Authorization":`Bearer ${localStorage.getItem("token")}`  
//       }
  
//         payload
//       }
//     })
axios.post("https://ill-jade-angler-sari.cyclic.app/posts/add",payload,{
  headers:{
    "Content-type":"application/json",
    "Authorization":`Bearer ${localStorage.getItem("token")}`
  }
}).then(res=>console.log(res.data))
.catch(err=>console.log(err))
}
  
  return (
    <div>Createpost
      <input type='text' value={title} placeholder='Enter title' onChange={(e)=>{setTitle(e.target.value)}}/>
      <input type='text' value={body} placeholder='Enter body' onChange={(e)=>{setbody(e.target.value)}}/>
      <select value={device} onChange={(e)=>setdevice(e.target.value)}>
        <option value="">__</option>
        <option value="Tablet">Tablet</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
      </select>
      <input type='number' value={no_of_comments} placeholder='Enter Commnents' onChange={(e)=>{setComments(e.target.value)}}/>
      <button onClick={handleCr}>Create</button>
    </div>
  )
}

export default Createpost