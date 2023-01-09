import React from 'react'
import { useState, useEffect } from 'react'

import "./fetchpage.css"
const Fetchpage = () => {
    const [users, setusers] = useState([])
    const [loading, setloading] = useState(false)

    const clickHandler = () => {
        setloading(true)
        fetch("https://randomuser.me/api/")
            .then((response) => response.json())
            .then((data) => {
                //store userdata in users state
                setusers(data?.results)
                //  make the loading state false, after fetching data ,
                setloading(false)    
            })

    }
    return (
        <div className='userdata'>
            <span>
                <h2>Random User Generator</h2>
                <button onClick={clickHandler}>Get User</button>
            </span>
            {loading && <div className='loader'><h1>loading...</h1></div>}
            {!loading &&  users?.map((user, index) => (
                <div className='data-container'>
                    <ul key={index}>
                        <li><img src={user.picture.large} alt="image" /></li>
                        <li><h5>Name: {user?.name.title} {user?.name.first} {user?.name.last}</h5></li>
                        <li><h5>Gender: {user.gender}</h5></li>
                        <li><h5>emil: {user.email}</h5></li>
                    </ul>
                </div>

            ))}
        
        </div>
    )
}

export default Fetchpage