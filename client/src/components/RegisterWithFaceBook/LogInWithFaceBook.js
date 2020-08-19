
import FacebookIcon from '@material-ui/icons/Facebook';

import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

import axios from 'axios'
let APP_ID = "592319644737485";
const timeLogiin = ()=>{
let currentdate = new Date(); 
let datetime = "login Time : " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
return datetime
}


export default function LogInWithFaceBook() {
  const [isLogin, setIsLogIn] = useState(false);
  useEffect(() => {
    loadFbLoginApi();

  });
  const loadFbLoginApi = () => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: APP_ID,
        autoLogAppEvents: false,
        xfbml: true,
        version: "v8.0",
      });
    };


    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  const statusChangeCallback = (response) => {
    console.log("statusChangeCallback");
    if (response.status === "connected") {
      setIsLogIn(true);
    } else if (response.status === "not_authorized") {
      console.log("Please log into this app.");
    } else {
      console.log("Please log into this facebook.");
    }
    console.log(response);
  };


  const handleFBLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          console.log("Welcome!  Fetching your information.... ");
          window.FB.api("/me?fields=first_name,last_name,email", function (response) {
            console.log(response);
            axios.post('/userLoginAuth',{userRegisterForm:response,userSignInRegular:"Face Book Login" ,time: timeLogiin() })
            .then(res=>{

              if (res.status ===200) {
                setIsLogIn(true)
              }
              }
            )
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
          return;
        }
        console.log(response);
        statusChangeCallback(response); 
      }
    );
  };
  const handleFBLogout = () => {
    window.FB.logout((response) => {
      statusChangeCallback(response);
      setIsLogIn(false);
      localStorage.removeItem('userlogin');         

    });
  };

  if (isLogin) {
    return (
        <Button variant="contained" color="primary" onClick={handleFBLogout}>
          LogOut <FacebookIcon />
         
        </Button>
    );
  }
  return (
      <Button variant="contained" color="primary" onClick={handleFBLogin}>
     Login  <FacebookIcon />
        
      </Button>
  );
}
