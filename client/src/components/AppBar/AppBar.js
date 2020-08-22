import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { motion } from "framer-motion";
import history from "../../history";
import Button from "@material-ui/core/Button";
import "./AppBar.css";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

// const containerVariants = {
//     hidden: {
//         opacity: 0,
//         x:'50vw '
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition:{
//         type:'spring',
//         delay:0.5
//       }
//     }
//   }
 function AppBar(props) {

  return (
    <div style={{width:'100vw'}}>
      <Typography component={"span"}>
        <Box
          // bg="dark"
          css={{bgcolor:"black"}}
          fontSize="3rem"
          fontFamily="Roboto"
          color="white "
          p={1}
        >
          AsCars <b>Wix challenge</b>
          {/* <div style={{ width: "100%" }}> */}
            {/* <Box p={1} display="flex"> */}
              {/* <Box p={1} width="100%" className="App-Bar-Links">
                <Link to="/register"> Register </Link>||
                <Link to="/login"> Login </Link>
              </Box> */}
              {/* <Box p={1} flexShrink={1}>
                <LoginWithGoogleCopy />
              </Box>
              <Box p={1} flexShrink={0}>
                <LogInWithFaceBook />
              </Box> */}
            {/* </Box> */}
          {/* </div> */}
        </Box>
      </Typography>
      {/* <motion.div variants={containerVariants} initial="hidden" animate='visible'>
<Typography component={'span'}>
        <Box letterSpacing={6} fontSize="2.75rem" variant="h2" align="center" fontFamily="Roboto" >
          Cars Catalog
        </Box>
      </Typography>
</motion.div> */}
    </div>
  );
}

// const showMeMystate = (state)=>{
// console.log(state);
// return {state}
// }
export default connect()(AppBar)