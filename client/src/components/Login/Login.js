import React, { useState } from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import history from '../../history'
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LoginWithGoogle from '../LoginWithGoogle/LoginWithGoogle';
import LoginWithFaceBook from '../LoginWithFaceBook/LogInWithFaceBook'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

    },
    avatar: {
      margin: theme.spacing(1),
       backgroundColor: 'black',
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(2, 0, 1.5),
    },
  }));
export default function Login() {

    const {register ,handleSubmit} = useForm();
    const {isUserSignIn ,setIsUserSignIn} = useState(null);

    const HandelSubmitSignInForm = (data)=>{
        console.log(data);
        axios.post("/userLogin",{userLoginForm:data })
        .then(res=>{
        console.log(res.status);

        if (res.status === 201||200) {
          setIsUserSignIn(true)
          history.push('/carcatalog')
          
        }
        
        })
        
        }

    const classes = useStyles();

    return (<Container component="main" maxWidth="xs">
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          LogIn
        </Typography>
        <form className={classes.form}  onSubmit={handleSubmit(HandelSubmitSignInForm)}>
          <Grid container spacing={2}>
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
            className={classes.submit}
          >
           login
          </Button>
     <LoginWithGoogle/>
       <LoginWithFaceBook/>
        </form>
      </div>
      </Container>
    )
}


// const Login = ()=>{

//     axios.post('/userlogin',{  email : "astu053@gmail.com", password :'147' }).then(res=>{
   
//            console.log(res.data);
//          })
       
//      }