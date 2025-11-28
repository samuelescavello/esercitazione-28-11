import "./App.css";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(null);
  const utente = {
    name: "Mario Rossi",
    age: 30,
    email: "mario.rossi@example.com",
    status: "premium",
  };
  function onLogin() {
    setUser(utente);
  }
  return (
    <>
      {user ? (
        <div>utente loggato</div>
      ) : (
        <button onClick={onLogin}>login</button>
      )}
    </>
  );
}

export default App;
