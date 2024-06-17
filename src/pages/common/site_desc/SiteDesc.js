import React from 'react'
import {Link} from "react-router-dom";
import Login from '../../auth/Login'
import SignUp from '../../auth/SignUp'




const SiteDesc = () => {
  return (
    <div>
      <div >
        <Link to="/login">
        <button >Login</button>
        </Link>
        <Link to="/sign-up">
        <button >Sign Up</button>
        </Link>
      </div>
    </div>
  )
}

export default SiteDesc
