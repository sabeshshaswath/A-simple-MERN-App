
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  return (
    <div className='auth'>
    <Login />
      <Register />
    </div>
  )
}
const Login = () => {
    const [_, setCookies] = useCookies(["access_token"]);
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const result = await axios.post("http://localhost:3001/auth/login", {
          username,
          password,
        });
  
        setCookies("access_token", result.data.token);
        window.localStorage.setItem("userID", result.data.userID);
        navigate("/");
      } catch (e) {
        console.error(e);
      }
    };
    return (
      <Form handleSubmit={handleSubmit}username={username}
      label="Login"
      setUsername={setUsername} password={password} setPassword={setPassword}/>
    );
  };
  
  const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post("http://localhost:3001/auth/register", {
          username,
          password,
        });
        alert("Registration Completed! Now login.");
      } catch (e) {
        console.error(e);
      }
    };
  
    return (
      <Form handleSubmit={handleSubmit}username={username}
      label="Register"
      setUsername={setUsername} password={password} setPassword={setPassword} />
    );
  };
const Form=({username,setUsername,password,setPassword,label,handleSubmit})=>{
  return(
    <div className="auth-container">
    <form onSubmit={handleSubmit}>
      <h2>{label}</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
  )

}

export default Auth