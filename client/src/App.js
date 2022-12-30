import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

import LoginButton from "./components/auth0/loginButton";

import UserProfile from "./components/auth0/userProfile";

function App() {

  const {isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
      return (
        <div className="text-center mt-5">
          <h1 className="text-info">Welcome to Coding School</h1><hr/>
          <h3 className="text-secondary">Authenticate with Auth0</h3>
          <LoginButton />
        </div>
      );  
  }    
  return (
    <div className="App">
      <UserProfile/>
    </div>
  )
}

export default App;
