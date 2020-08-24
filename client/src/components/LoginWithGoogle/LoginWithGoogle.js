import history from '../../history'
import axios from 'axios'
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
const CLIENT_ID =
  '985456443459-s88anfsj9ok4qpdqcn1s29usqhgt594q.apps.googleusercontent.com';
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

function LoginWithGoogle(){
  const [isLogined, setIsLogined] = useState(false);

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
    let auth = window.gapi.auth2.getAuthInstance();
    console.log(auth.currentUser.le.tt);

    axios.post('/userLoginAuth',{userRegisterForm:auth.currentUser.le.tt,userSignInRegular:"google Login" ,time: timeLogiin() })
    .then(res=>{

      if (res.status ===200) {
  history.push('/Ascars-catalog/cars-list')

  setIsLogined(true)
      }
      }
    )
    
     return setIsLogined(true)
      
  }
     return setIsLogined(false)
}

const RenderAuthButton=()=>{

  if (isLogined === null) {
      return(<div>
          I dont know if you are signed in !
      </div>)    
  }
  else if (isLogined) {
      return <Button variant="contained"fullWidth color="secondary" onClick={HendaleSignOutClick} >
       Logout <img src='../../.././iconfinder_google-plus_1279046.png' height='28px'/>
          </Button >
      
  }
      return(<div style={{marginBottom:'10px'}}>
          <Button  variant="contained" color="secondary"  fullWidth onClick={HendaleSignInClick} >
        <img src='../../.././iconfinder_google-plus_1279046.png' height='28px'/>
    
      </Button >
      </div>
      
    
      
     
  )
  
  }


 const HendaleSignInClick = () =>{      
    let auth = window.gapi.auth2.getAuthInstance();
 auth.signIn();

}

const HendaleSignOutClick = () =>{
  let auth = window.gapi.auth2.getAuthInstance();
    auth.signOut();
    history.push('/')

}
return(
  RenderAuthButton()
)
}



export default LoginWithGoogle