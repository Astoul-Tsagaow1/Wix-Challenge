import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import history from '../../history'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import  LogInWithFaceBook from '../LoginWithFaceBook/LogInWithFaceBook'
import LoginWithGoogle from '../LoginWithGoogle/LoginWithGoogle'
import { Link } from "react-router-dom";

import {useStyles} from './Style'

export default function SignUp() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  
  const HandelSubmitSignInForm = (data) => {
    console.log(data);
    axios
      .post("/userRegister", {
        userRegisterForm: data,
        userSignInRegular: true,
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          localStorage.setItem('regularLogin',true)

          history.push('/Ascars-catalog/cars-list')
          
        }
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar  className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(HandelSubmitSignInForm)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                inputRef={register}
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                inputRef={register}
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required={true}
                fullWidth
                id="email"
                label="Email Address"
                inputRef={register}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                inputRef={register}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary.light"
            className={classes.submit}
          >
            Sign Up
          </Button>
           <LoginWithGoogle/>
           <LogInWithFaceBook />   
     
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/Ascars-catalog/login" variant="body2">
                   Already have an account? Login
                 </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}


