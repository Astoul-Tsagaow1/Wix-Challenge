import React from "react";
// import"./app.css"

import GetCarsList from "./components/GetCarListAndDisplay";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
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

      <GetCarsList />
    </div>
  );
}
//
export default App;
