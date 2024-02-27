//import './App.css';
import { useState } from "react";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="register-container">
      <form>
        <h2> Register </h2>
        <div className="form-group">
           <label htmlFor="username">Username: </label>
           <input 
           type="text" 
           id="username" 
           value={username}
           onChange={(event) => setUsername(event.target.value)}
           />
        </div>
        <div className="form-group">
           <label htmlFor="email"> Email: </label>
           <input 
           type="text" 
           id="email" 
           value={email}
           onChange={(event) => setEmail(event.target.value)}
           />
        </div>
        <div className="form-group">
           <label htmlFor="password"> Password: </label>
           <input 
           type="text" 
           id="password" 
           value={password}
           onChange={(event) => setPassword(event.target.value)}
           />
        </div>
        <button type="submit"> Register</button>
      </form>
    </div>
  );
};
