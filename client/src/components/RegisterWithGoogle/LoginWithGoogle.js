import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import axios from 'axios'
const CLIENT_ID =
  "343947870406-ffkk9raui0uo61ji0g5ukqeh45riii16.apps.googleusercontent.com";

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
    
export default function LoginWithGoogle() {
  const [isLogined, setIsLogined] = useState(false);
  const [accessToken, setaccessToken] = useState("");

;

  const login = (response) => {
     console.log(response);
     axios.post('/userLoginAuth',{userRegisterForm:response.Pt,userSignInRegular:"Google login" ,time: timeLogiin() })
     .then(res=>{
       console.log(res.status);
      }
     ) 

    if (response.accessToken) {
      setaccessToken(response.accessToken);
   

      setIsLogined(true);
    }
  };

  const handleLoginFailure = (res) => {
    console.log(res);
  };

  const logout = (response) => {
    setaccessToken("");
    setIsLogined(false);
  };

  if (localStorage.getItem('useralreadlogin')) {
      return ""
  }
 const handleLogoutFailure =(response)=> {
    alert('Failed to log out')
  }
  return isLogined ? (
    <GoogleLogout
      clientId={CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={logout}
      onFailure={handleLogoutFailure}
    />
  ) : (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonText="Login"
      onSuccess={login}
      onFailure={handleLoginFailure}
      cookiePolicy={"single_host_origin"}
      responseType="code,token"
    />
  );
}
