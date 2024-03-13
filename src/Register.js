import React, { useContext } from 'react'
import Home from './Home'
import './Register.css'
import { UserContext } from './App'

export default function Register() {
    const {flag,setFlag}=useContext(UserContext);
  return (
    <>
    <div className='Register-model'>
      <div className='Register-model-content'>
        <div className="Register-header">
          <div className="Register-signup-title">Register</div>
          <div onClick={()=> setFlag(() => 0)} className="close"> &times;</div><br></br>
        </div>

       {/* <div>Register</div> */}
        <input type="text" placeholder='username' required></input><br></br><br></br>
        <input type="email" placeholder='email' requried></input><br></br><br></br>
        <input type='password' placeholder='password' required></input><br></br><br></br>
         <button onClick={() => setFlag((prevState) => 1)}>Submit</button>
    </div>
  </div>
    </>
  )
}