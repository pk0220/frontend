import { TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("Emailid"),
      password: data.get("Password"),
    };

    let loginData = { emailid: email, password: password };

    axios
      .post("http://localhost:8081/user/login", loginData)
      .then((Response) => {
        console.log("Response is :- ", Response);
        let user = Response.data;
        if (user) {
          //  localStorage.setItem('jwttoken',JSON.stringify(user.userid));
          alert("login successfully");

          sessionStorage.setItem("user", JSON.stringify(user));
          if (user.userRole === "Bidder") {
            sessionStorage.setItem("role", "Bidder");
            navigate("/Admin");
          } else if (user.userRole === "Bank") {
            sessionStorage.setItem("role", "Bank");
            navigate("/AddDetails");
          } else if (user.userRole === "Admin") {
            sessionStorage.setItem("role", "Admin");
            navigate("/Admin");
          }
        } else {
          alert("Something wrong");
        }

        // let data1 = {
        //   email: user.emailid,
        //   password: user.password,
        // };

        console.log("Response is data :- ", user);
        // if (actualData.email===response && actualData.password) {
        //   console.log(actualData);

        //   document.getElementById("login-form").reset();
        //   setError({ status: true, msg: "Login Success", type: "success" });
        // } else {
        //   setError({ status: true, msg: "All Fields are Required", type: "error" });
        // }

        // console.log("Response is :- ", response);
        //window.location.reload();
      });
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="login-form"
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          margin="dense"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
        />
        <TextField
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          margin="dense"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        <Box textAlign="center">
          <Button type="submit" variant="contained" sx={{ my: 2, px: 3 }}>
            Login
          </Button>
        </Box>
        <NavLink to="/sendpasswordresetemail">Forgot Password?</NavLink>
        {error.status ? (
          <Alert severity={error.type} sx={{ mt: 3 }}>
            {error.msg}
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default UserLogin;
