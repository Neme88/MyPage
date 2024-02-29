import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState(""); // State for error message
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3002/signin", {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      setSuccessMessage("Sign in successful!"); // Set success message
      navigate("/");
    } catch (error) {
      setError("Invalid username or password."); // Set error message
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2> Signin </h2>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>} {/* Display success message */}
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
          <label htmlFor="password"> Password: </label>
          <input
            type={showPassword ? "text" : "password"} // Toggle password visibility
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)} // Toggle password visibility
          />
          <label htmlFor="showPassword"> Show Password</label>
        </div>
        <button type="submit"> Sign in </button>
      </form>
    </div>
  );
};




