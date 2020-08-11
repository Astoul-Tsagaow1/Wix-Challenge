import React from "react";
import GetCarsList from './components/GetCarListAndDisplay';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Typography  variant="h2"align="center" underline="always" >Cars Catalog</Typography>
      <GetCarsList/>
    </div>

  );
}
//
export default App;

