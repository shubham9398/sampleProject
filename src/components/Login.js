import React, { useState } from "react";
// import { useLogin } from "../hooks/useLogin";
import { Button, Link } from '@mui/material';
//import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button';


const Login = () => {
  // const { login, isLoading, error, successuser } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    // await login(email, password);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="login">
        <h3>Log in</h3>
        <label style={{
          fontFamily: 'Alegreya',
          fontSize: '24px'
        }}>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label style={{
          fontFamily: 'Alegreya',
          fontSize: '24px'
        }}>Password:</label>
        <input

          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {/* <button disabled={isLoading} style={{ textTransform: "capitalize" }}> */}
        <Button style={{
          borderRadius: 35,
          backgroundColor: '#FF2625',
          padding: "18px 36px",
          marginBottom:"15px",
          fontSize: "18px"
        }} variant="contained">
          Log in
        </Button>

        {/* <Button style={{
          borderRadius: 35,
          backgroundColor: '#FF2625',
          padding: "18px 36px",
          fontSize: "18px"
        }} variant="contained" component={Link} to="/signup">
          Sign Up
        </Button> */}
        <p><Link href="/signup">Signup/Register</Link></p>
        {/* <p><Link
        component="button"
        variant="body2"
        onClick={() => {
        console.info("I'm a button.");
          }}>
          Button Link
        </Link></p>
        <p><a href="https://www.w3schools.com/">Visit W3Schools.com!</a></p> */}

        {/* <button  style={{ textTransform: "capitalize" }}>
          Log in
        </button> */}
        {/* {error && (
          <div className="error" style={{ textTransform: "capitalize" }}>
            {error}
          </div>
        )} */}
        {/* {successuser && (
          <div className="success" style={{ textTransform: "capitalize" }}>
            You have created an account successfully!
          </div>
        )} */}
      </form>
    </div>
  );
}

export default Login;
