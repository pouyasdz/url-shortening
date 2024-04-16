import { HambergerMenu } from 'iconsax-react'
import React from 'react'

function Header({setMenu}) {
  return (
    <header className='d-flex align-items-center gap-5'>
        <h2 className='fw-bold fs-2 '>Shortly</h2>
        <HambergerMenu onClick={()=> setMenu(true)} size="32" className='d-md-none ms-auto' color='rgb(145, 145, 145)'/>

        <div className="d-none d-md-flex gap-5 align-items-center links">
            <a href="#feautre">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#resources">Resources</a>
        </div>

        <div className="d-none d-md-flex align-items-center gap-5 ms-auto">
            <a href="#login">Login</a>
            <a href="#sign-up">Sign Up</a>
        </div>
    </header>
  )
}

export default Header