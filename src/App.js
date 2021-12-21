import React, { useState } from 'react';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email:""});
  const [error, setError] = useState("");

  const login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password)
    console.log("Sign in");
    setUser({
      name: details.name,
      email:details.email
    });
    } else {
      console.log("Details are not matiching!");
      setError("Details are not matiching!");
    }
  }

  const logout = () => {
    setUser({name: "", email: "" });
  }

  return (
    <div className="App">
     {(user.email !="") ? (
       <div className="welcome">
         <h2>Welcome, <span>{user.name}</span></h2>
         <button onClick={Logout}>Logout</button>
         </div>
     ) : (
       LoginForm
     )
     <LoginForm Login={Login} error={error}/>

     )}
    </div>
  );
}

export default App;
