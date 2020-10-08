import React from 'react'
import './RandomUser.css'
const RandomUser = (props) => {
    const { userData } = props
    return (
        <ul className="list-container" style={{listStyle: 'none'}}>
            {userData.map((user, index) =>{
                return <li key={index} className="user-card">
                <h1>{user.name.first} {user.name.last}</h1>
                <img className="list-image" src={user.picture.large} alt={`${user.name.first}`}></img>
            </li>
            })}
            
        </ul>
    )
}

export default RandomUser