import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Adapters/firebaseConfig";

import React, { useState } from "react";
import { MdOutlineMail, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import CircularLoader from "../../../Components/Loader/CircularLoader";

export default function SignIn() {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  
  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.email.length < 1) {
      alert("Please enter a valid email");
      return;
    } else if (values.password.length < 1) {
      alert("Please enter a valid password");
      return;
    } else {
      let email = values.email.trim();
      let password = values.password.trim();
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log("user details", res);
          setSuccessMessage(
            "login successfully !! you will be redirected to the home page"
          );
          setValues({ email: "", password: "", showPassword: false });
          setTimeout(() => {
            setSuccessMessage(null);
            navigate("/home");
          }, 3000);
        })
        .catch((err) => {
          console.log("error", err);
          setErrorMessage("login failed!! Please try again");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <Grid item xs={12} sm={12} md={12}>
      {loading && <CircularLoader />}
      {successMessage && <Typography>{successMessage}</Typography>}
      {errorMessage && <Typography>{errorMessage}</Typography>}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box component="main" maxWidth="xs" style={{ maxWidth: "400px" }}>
          <Paper
            elevation={12}
            style={{ padding: "24px" }}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Sign in to your account
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-email">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-email"
                    type={"email"}
                    value={values.email}
                    onChange={handleChange("email")}
                    label="Email"
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="email"
                          edge="start"
                          disabled={true}
                        >
                          <MdOutlineMail />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography align="center">
                  Don't have an Account ? <Link to="/signup"> Sign UP </Link>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}
