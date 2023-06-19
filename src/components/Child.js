import React,{useState} from 'react'

const Child = ({getLoginData}) => {

    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");


    function handelForm(e){
        e.preventDefault();
        // console.log(userName, password);
        let formArr = {};
        if(userName == ""){
            formArr.userName = "user name can not be empty";
        }
        if(password == ""){
            formArr.password = "password can not be empty";
        }
        setError(formArr);
        getLoginData(true);
    }

  return (
    <div>
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                type="text" 
                onChange={(e) =>setUserName(e.target.value)}
                value={userName}
                id='username'
                />
                {error.userName && <span>{error.userName}</span>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                type="password" 
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                id='password'
                />
                {error.password && <span>{error.password}</span>}
            </div>
            <button onClick={handelForm}>Login</button>
        </form>
    </div>
  )
}

export default Child