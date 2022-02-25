import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Login.scss";
import Button from "../../component/Button";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const handleLoginAction = () => {
    setError({ email: "", password: "" });
    if (email && password){
        const users = JSON.parse(localStorage.getItem('users'));
        if(users.find(k=>k.email === email && k.password === password)) navigate('/')
        else alert('Invalid User')
    }
    else {
      if (email === "") setError({ ...error, email: "Enter Email" });
      else if (password === "")
        setError({ ...error, password: "Enter Password" });
    }
  };

  return (
    <div className="login-form">
      <div className="login-text">
        <h2>Login</h2>
        <h4>Get Access to your Orders, Wishlist and Recommendations</h4>
      </div>
      <div className="login-right">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="email-password">
            <TextField
              required
              id="standard-required"
              label="Email"
              variant="standard"
              placeholder="email@test.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText={error?.email || ""}
              error={error?.email || false}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helperText={error?.password || ""}
              error={error?.password || false}
            />
            <div className="login-btn">
              <Button handleClickHandler={handleLoginAction}>Login</Button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Login;
