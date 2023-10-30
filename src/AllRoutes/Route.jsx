import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Components/Home'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Posts from '../Components/Posts'
import Createpost from '../Components/Createpost'
const AllRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/createpost" element={<Createpost/>}/>
    </Routes>
  )
}

export default AllRoute