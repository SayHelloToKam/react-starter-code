import React,{useState} from 'react'

function Header() {

const [username,setUsername]=useState('John Doe')
const [imageUrl,setImageUrl]=useState('https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80')


const changeUser=()=>{
  setUsername('Jane Doe')
  setImageUrl('https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80')
}


  return (
    <div className="header-container">
    <div className="header-profile">
       <p>{username}</p>
       <img className="profile-img" src={imageUrl} alt="user"/>
    </div>
    <button onClick={changeUser}>Change User</button>
  </div>
  )
}

export default Header