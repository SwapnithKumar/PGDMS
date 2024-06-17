import React from 'react'
import Header from './Header'
import UserContext from '../context/UserContext'

const Dashboard = () => {
  return (
    <UserContext.Consumer>
      {value=>{
        const {userData}=value;
        console.log(userData);
      <div>
        <Header/>
      </div>
    
      }
    }
    </UserContext.Consumer>
    
  )
}

export default Dashboard
