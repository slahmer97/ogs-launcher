import React, {useState} from 'react'
import LoginForm from "./Components/LoginForm";
import ServerStatsForm from "./Components/ServerStats";
function App() {
  const adminUser = {
      username: "slahmer",
      password: "fivem123"
  }


  const [user, setUser] = useState({username:"", password:""});
  const [error, setError] = useState("")
  const Login = details => {
      console.log(details);
      if (details.username === adminUser.username && details.password === adminUser.password){
          setUser({
              username: details.username,
              password: details.password
          })
      }
      else{
          setError("details do not match!")
      }
  }

  return (
      <div className="App">
          {(user.username !== "") ? (
              <div className="welcome">
                  <h2>Welcome, <span> {user.username}</span></h2>
                  <ServerStatsForm/>
              </div>
          ):
          (
              <LoginForm Login={Login} error={error}/>
          )

          }
      </div>
  );
}

export default App;
