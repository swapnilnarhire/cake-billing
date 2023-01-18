import React, { useState } from "react";
import { Box, Grid, Paper, Typography, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../Adapters/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import CircularLoader from "../../../Components/Loader/CircularLoader";

export default function SignUp() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [mobile, setMobile] = useState(null);
  // const [confirmPassword, setConfirmPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        addDoc(collection(db, "users"), {
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
          mobileNuber: mobile,
          uid: user.uid,
        })
          .then((res) => {
            console.log(res);
            if (res) {
              setSuccessMessage(
                "new user created successfully. you will be automatically redirected to sign in page"
              );
              setFirstName(null);
              setLastName(null);
              setEmail(null);
              setPassword(null);
              setMobile(null);
              setPassword(null);
              setErrorMessage(null);
              setTimeout(() => {
                setSuccessMessage(null);
                navigate("/signin");
              }, 5000);
            }
          })
          .catch((err) => {
            console.log(err);
            setErrorMessage(err?.message);
          });
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {loading && <CircularLoader />}
      {successMessage && <Typography>{successMessage}</Typography>}
      {errorMessage && <Typography>{errorMessage}</Typography>}
      <Grid
        container
        justifyContent={"space-between"}
        direction={"column"}
        alignContent={"center"}
        spacing={2}
      >
        <Grid item>
          <Paper
            elevation={12}
            style={{ padding: 12, minWidth: 360 }}
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
              justifyContent={"space-between"}
              direction={"column"}
              alignContent={"center"}
              spacing={2}
            >
              <Grid item xs={12}>
                <Typography variant="h5">Sign up</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  type={"text"}
                  id="firstName"
                  label="First Name"
                  variant="standard"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  type={"text"}
                  id="lastName"
                  label="Last Name"
                  variant="standard"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required={true}
                  type={"email"}
                  id="email"
                  label="Email"
                  variant="standard"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  type={"tel"}
                  id="mobile"
                  label="Mobile"
                  variant="standard"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  id="password"
                  label="Password"
                  variant="standard"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button color="primary" variant="contained" type="submit">
                  Sign up
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Already have an account? <Link to={"/signin"}>Sign In</Link>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>{" "}
    </Box>
  );
}
