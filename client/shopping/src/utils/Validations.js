export const ValidateEmail = (email, dispatcher) => {
  var re = /\S+@\S+\.\S+/;
  if (!re.test(email))
    dispatcher("setError", {
      key: "email",
      value: "Please Enter Valid Email in Field",
    });
  else return true;
};

export const PasswordMatch = (state, dispatcher) => {
  if (state["password"].length < 6)
    dispatcher("setError", {
      key: "password",
      value: "Password Length should be minimum six characters",
    });
  else if(!/(^[A-Za-z]+\d+|\d+[A-Za-z]+)[A-Za-z\d]*$/.test(state["password"])) 
    dispatcher("setError", {
        key: "password",
        value: "Password should have numbers and alphabet without spaces",
    }); 
  else if (state["password"] !== state["cpassword"]) {
    dispatcher("setError", {
      key: "cpassword",
      value: "Password and Confirm Password is different.",
    });
  }
};
