import React, {useState} from 'react'
import { useAuth } from "../../../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

import Error from '../Error/ErrorFields'


export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout} = useAuth()
    const navigate = useNavigate()
    
    async function handleLogout(){
      setError('')

      try {
          await logout()
          navigate("/")


      }
      catch {

        setError('Fail to log out')
      }

    }


  return (
  <>
      <div>
        <div>
          <h2 className="">Profile</h2>
          {error && <Error>{error}</Error>}
          <p>Hello You {currentUser.email}</p> 
          <Link to="/update-profile" className="">
            Update Your Profile
          </Link>
        </div>
      </div>
      <div className="">
        <button variant="link" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </>
  )
}
