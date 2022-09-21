import React from 'react'
import "./style.css"
import SignInBtn from '../../components/signin-btn'

function Navbar() {
    return (
        <div className="navbar">
            <p>ReactSocial</p>

            <SignInBtn />
            
        </div>
    )
}

export default Navbar
