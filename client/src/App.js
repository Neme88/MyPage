import './App.css';
import { useState } from "react";

function App() {
  const [listOfUsers, setListOfUsers] = useState([
    { id: 1, name: "Neme", age: 20, username: "NemeTech" }
  ]);
  return ( 
    <div className="App">
    <div className="usersDisplay"></div>
      {listOfUsers.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Username: {user.username}</h1>
           </div>

        );
      
      })}
  </div>
</div> 
)};

export default App;
