import Button from "@material-ui/core/Button";
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import React, { useEffect, useState } from "react";
// import axios from 'axios'
const CLIENT_ID =
  "*******************-********.**********";

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
    
export default function LoginWithGoogleCopy (){
  const [isLogined, setIsLogined] = useState(false);
  const [accessToken, setaccessToken] = useState("");

useEffect(()=>{
  window.gapi.load("client:auth2" , ()=>{
    return window.gapi.client.init({
         clientId:CLIENT_ID,
         scope:'email'
     }).then(()=>{
      let auth = window.gapi.auth2.getAuthInstance();
      console.log(auth);
     onAuthChange(auth.isSignedIn.get())
     auth.isSignedIn.listen(onAuthChange)
     })
 });
},[])

const onAuthChange = (isSignedIn) =>{ 
  if (isSignedIn) {
       console.log(isSignedIn);
       localStorage.setItem('useralreadlogin',true);         

     return setIsLogined(true)
      
  }
  localStorage.removeItem('useralreadlogin');         

     return setIsLogined(false)
}

const RenderAuthButton=()=>{

  if (isLogined === null) {
      return(<div>
          I dont know if you are signed in !
      </div>)    
  }
  else if (isLogined) {
      return <Button variant="contained" color="primary" onClick={HendaleSignOutClick} >
          <i className="google icon"/>
         Logout 
          </Button >
      
  }
      return(<Button variant="contained"  onClick={HendaleSignInClick} >
    Login
      </Button >
  )
  
  }


 const HendaleSignInClick = () =>{      
        
    // console.log(window.gapi.auth2.getAuthInstance().currentUser.get().getId(), "User id ");
    let auth = window.gapi.auth2.getAuthInstance();
 auth.signIn()

}

const HendaleSignOutClick = () =>{
  let auth = window.gapi.auth2.getAuthInstance();

    auth.signOut();
    // setIsLogined(false)

}
return(
  RenderAuthButton()
)
}
