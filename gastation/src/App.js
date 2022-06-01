import logo from './logo.svg';
import './App.css';
import TableValues from './Components/table.js';
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./Components/LoginButton.js";
import LogoutButton from "./Components/LogoutButton.js";

function getComponents(isAuthenticated){
  if(isAuthenticated === true) {
    return (
        <TableValues/>
    )
  }
  else {
    return(
      <LoginButton/>
    )
  }
}

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="App">
      {getComponents(isAuthenticated)}
    </div>
  );
}

export default App;
