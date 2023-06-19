import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
    let [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div>
        <h1>Parent Component</h1>
        
        {
            isLoggedIn == false ? <Child getLoginData={setIsLoggedIn}/>:
            <p>You are logged in!</p>
        }
    </div>
  )
}

export default Parent