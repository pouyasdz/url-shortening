import React from 'react'

function MobileMenu({rf}) {
  return (
   <nav className="mobile-menu" ref={rf}>
        <ul className='w-100 d-flex  flex-column  align-items-center gap-4'>
            <li><a className='text-white fs-3 fw-semibold' href="#blank">Features</a></li>
            <li><a className='text-white fs-3 fw-semibold' href="#blank">Pricing</a></li>
            <li><a className='text-white fs-3 fw-semibold' href="#blank">Resources</a></li>
        </ul>
        <hr className='bg-white'/>
        <a className='text-white fs-3 fw-semibold mt-auto text-center' href="#blank">Login</a>
        <button className='btn-primary btn-rounded mt-4'>Sign up</button>
   </nav>
  )
}

export default MobileMenu