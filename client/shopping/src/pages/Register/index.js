import React, { useEffect, useReducer, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import Button from "../../component/Button";
import { ValidateEmail, PasswordMatch } from "../../utils/Validations";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  cpassword: "",
  error: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
    isFormValid: false,
  },
};
const Register = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatcher = (type, payload) => {
    dispatch({ type, payload });
  };

  const validateFields = () => {
    dispatcher("resetError");
    Object.keys(initialState).map((item) => {
      if (item !== "error" && state[item] === "") {
        dispatcher("setError", {
          key: item,
          value: "Please Enter Value in Field",
        });
      } else if (item !== "error" && item === "email") {
        ValidateEmail(state[item], dispatcher);
      } else if (
        item !== "error" &&
        (item === "password" || item === "cpassword")
      ) {
        PasswordMatch(state, dispatcher);
      }
    });
  };

  useEffect(() => {
    if (state.error.isFormValid) {
      const users = JSON.parse(localStorage.getItem("users"));
      if (users === null) {
        localStorage.setItem("users", JSON.stringify([state]));
      } else {
        if (users?.some((el) => el.email === state?.email)) {
          dispatcher("setError", {
            key: "email",
            value: "Email Id Already Registered",
          });
          return;
        } else {
          users.push(state);
          localStorage.setItem("users", JSON.stringify(users));
        }
      }
      dispatcher("register");
    }
  }, [state.error.isFormValid]);

  function reducer(state, action) {
    switch (action.type) {
      case "setValue":
        const payload = action.payload.target;
        return { ...state, [payload.name]: payload["value"] };
      case "register":
        navigate("/");
        return state;
      case "setError":
        return {
          ...state,
          error: {
            ...state.error,
            [action?.payload?.key]: action?.payload?.value,
            isFormValid: false,
          },
        };
      case "resetError":
        return {
          ...state,
          error: { ...initialState.error, isFormValid: true },
        };
      default:
        return initialState;
    }
  }

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="register-form">
      <div className="register-text">
        <h2>SignUp</h2>
        <h4>We Dont Share your personal details with Anyone</h4>
      </div>
      <div className="register-right">
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
              id="standard-required"
              label="First Name"
              variant="standard"
              value={state.firstName}
              name="firstName"
              onChange={(e) => dispatch({ type: "setValue", payload: e })}
              helperText={state?.error?.firstName || ""}
              error={state?.error?.firstName || false}
            />
            <TextField
              id="standard-required"
              label="Last Name"
              value={state.lastName}
              name="lastName"
              variant="standard"
              onChange={(e) => dispatch({ type: "setValue", payload: e })}
              helperText={state?.error?.lastName || ""}
              error={state?.error?.lastName || false}
            />
            <TextField
              id="standard-required"
              label="Email"
              variant="standard"
              placeholder="email@test.com"
              value={state.email}
              name="email"
              onChange={(e) => {
                dispatch({ type: "setValue", payload: e });
              }}
              helperText={state?.error?.email || ""}
              error={state?.error?.email || false}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              value={state.password}
              name="password"
              onChange={(e) => dispatch({ type: "setValue", payload: e })}
              helperText={state?.error?.password || ""}
              error={state?.error?.password || false}
            />
            <TextField
              id="standard-password-input"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              value={state.cpassword}
              name="cpassword"
              onChange={(e) => dispatch({ type: "setValue", payload: e })}
              helperText={state?.error?.cpassword || ""}
              error={state?.error?.cpassword || false}
            />
            <div className="register-btn">
              <Button handleClickHandler={validateFields}>SignUp</Button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Register;
