import React from "react";
import GetCarListAndDisplay from "./components/GetCarListAndDisplay/GetCarListAndDisplay";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { motion } from "framer-motion"

const containerVariants = {
  hidden: {
      opacity: 0,
      x:'50vw '
  },
  visible: {
    opacity: 1,
    x: 0,
    transition:{
      type:'spring',
      delay:0.5
    }
  }
}
function App() {
  return (
    <div className="App">
      <Typography>
        <Box
          bgcolor="primary.main"
          fontSize="2.3rem"
          fontFamily="Roboto"
          color="white "
          p={5}
        >
          AsCars <b>Wix challenge</b>
        </Box>{" "}
      </Typography>
<motion.div variants={containerVariants} initial="hidden" animate='visible'>
<Typography>
        <Box
          letterSpacing={6}
          fontSize="2.75rem"
          variant="h2"
          align="center"
          fontFamily="Roboto"
        >
          Cars Catalog
        </Box>
      </Typography>
</motion.div>


      <GetCarListAndDisplay />
    </div>
  );
}
//
export default App;
