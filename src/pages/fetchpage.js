import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import "./fetchpage.css"
const Fetchpage = () => {
    const [users, setusers] = useState([])


   
    useEffect(()=>{
        axios.get("https://randomuser.me/api/").then((res)=>setusers(res.data.results))
    },[])

    console.log(users)





    return (
        <div className='userdata'>
            {users.map((user, index) => (
                <ul  key={index}>
                    <li><h2>Gender:{user.gender}</h2></li>
                    <li><h2>Name: {user.name.first} {user.name.last}</h2></li>
                    <li><h2>emil: {user.email}</h2></li>
                    <li><h2><img src={user.picture.large} alt="image"/></h2></li>
                </ul>))}
    </div>
    )
}

export default Fetchpage