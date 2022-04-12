import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Alert,
  NativeSelect,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import url from ".../url";
import axios from "axios";

const Registration = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [conf_pass, setConf_pass] = useState("");

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      Mobile_No: data.get("tel"),
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
      tc: data.get("tc"),
    };
    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.password_confirmation &&
      actualData.tc !== null
    ) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById("registration-form").reset();
        setError({
          status: true,
          msg: "Registration Successful Now You Can login",
          type: "success",
        });
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password Doesn't Match",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }

    let bankData = {
      userRole: role,
      name: name,
      emailid: email,
      mobileno: tel,
      password: password,
      
    };
    axios
      .post("http://localhost:8081/user/register", bankData)
      .then((response) => {
        console.log("REsponse is :- ", response);
        // window.location.reload();
      });
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1, mx: 3 }}
        id="registration-form"
        onSubmit={handleSubmit}
      >
        {/* <button className="btn btn-warning">
          <NativeSelect
            onChange={(e) => {
              setRole(e.target.value);
            }}
            id="select"
          >
            <option value="Bank">Bank</option>
            <option value="Bidder">Bidder</option>
          </NativeSelect>
        </button> */}
        <div>
              {/* <label htmlFor="role" className="formFieldLabel"></label> */}
              <select
            
                id="role"
                name="role"
                placeholder='Choose a role'
                className="form-control form-control-md mb-2"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select your role
                </option>

                <option value="Bank">Bank</option>
                <option value="Bidder">Bidder</option>
              </select>
        </div>
        <TextField
          onChange={(e) => {
            setName(e.target.value);
          }}
          margin="dense"
          required
          fullWidth
          id="name"
          name="name"
          label="Bank/Bidder Name"
        />
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
            setTel(e.target.value);
          }}
          margin="dense"
          required
          fullWidth
          id="tel"
          name="Mobile_No"
          label="Mobile No"
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
        <TextField
          onChange={(e) => {
            setConf_pass(e.target.value);
          }}
          margin="dense"
          required
          fullWidth
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm Password"
          type="password"
        />
        <FormControlLabel
          control={<Checkbox value="agree" color="primary" name="tc" id="tc" />}
          label="I agree to term and condition."
        />
        <Box textAlign="center">
          <Button type="submit" variant="contained" sx={{ my: 2, px: 2 }}>
            Register
          </Button>
        </Box>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </>
  );
};

export default Registration;
