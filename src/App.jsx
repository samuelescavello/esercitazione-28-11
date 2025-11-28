import "./App.css";
import { useState } from "react";
import UserDashboard from "./components/UserDashboard/UserDashboard";
function App() {
  const [user, setUser] = useState(null);
  const utente = {
    name: "Mario Rossi",
    age: 30,
    email: "mario.rossi@example.com",
    status: "premium",
    hobbies: ["giocare a golf", "leggere", "andare in barca"],
    notifiche: ["prenotare l'hotel", "fare un bonifico a Gabriele"],
  };
  function onLogin() {
    setUser(utente);
  }
  return (
    <>
      {user ? (
        <UserDashboard user={user} />
      ) : (
        <button onClick={onLogin}>login</button>
      )}
    </>
  );
}

export default App;
