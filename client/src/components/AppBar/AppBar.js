import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import "./AppBar.css";
import { Link } from "react-router-dom";

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
         <Link className='App-Bar-title' to='/'>AsCars <b>Wix challenge</b></Link> 
       
        </Box>
      </Typography>

    </div>
  );
}


export default AppBar