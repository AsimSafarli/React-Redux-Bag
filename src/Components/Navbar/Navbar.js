import React from 'react'
import { CartIcon } from '../../Details/Icon'
import { useSelector } from 'react-redux'
function Navbar() {
   const {amount} =useSelector((store)=>store.cart)
  return (
    <div>
     <div>asimsafar</div>
     <div><CartIcon/>
      <div>
        <p>{amount}</p>
      </div>
     </div>
     </div>
  )
}

export default Navbar