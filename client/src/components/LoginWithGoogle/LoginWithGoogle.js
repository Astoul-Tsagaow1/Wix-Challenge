import Button from "@material-ui/core/Button";
import {connect} from 'react-redux'
import React, { useEffect, useState } from "react";
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
})

const onAuthChange = (isSignedIn) =>{ 
  if (isSignedIn) {
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
        <img src='../../.././iconfinder_google-plus_1279046.png' height='25px'/>
          </Button >
      
  }
      return(<div style={{marginBottom:'10px'}}>
          <Button  variant="contained" color="secondary"  fullWidth onClick={HendaleSignInClick} >
        <img src='../../.././iconfinder_google-plus_1279046.png' height='25px'/>
    
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

}
return(
  RenderAuthButton()
)
}


// const showMeMystate = (state)=>{
// console.log(state);
//   // return{}
// }
export default connect()(LoginWithGoogle)