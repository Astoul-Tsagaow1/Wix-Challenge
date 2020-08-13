import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCarList from "../DisplayCarList/DisplayCarList";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Typography } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';

const Styles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 300,
    minHeight: 100
  },
  root: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'ceter'
   
  }
}));
function GetCarListAndDisplay() {
  const [cars, setCars] = useState([]);
  const [carsSelectOptions, setCarsSelectOptions] = useState([]);
  const [arrayAfterFilterHolder, setArrayAfterFilterHolder] = useState(null);
  const [carsListAfterFilter, setCarsListAfterFilter] = useState(null);

  const classes = Styles();

  useEffect(() => {
    axios.get("/getAllcars").then(res => {
      if (res.status === 200) {
        const categorys = res.data.map(car => {
          return car.make;
        });
        let unique = [...new Set(categorys)];

        setCarsSelectOptions(unique);
        return setCars(res.data);
      }

    });
  }, []);

  if (cars.length === 0) {
    return (
      <div className={classes.root}>
      <CircularProgress />
      </div>
    );
  }
  const filterByCarsNamesChange = event => {
    if (event.target.value === "All") {
      setCarsListAfterFilter(null);
      setArrayAfterFilterHolder(null);
      return;
      //show all cars to users
    }
   
    const afterfilter = cars.filter(cars => {
      return cars.make === event.target.value 
    });
    setCarsListAfterFilter(afterfilter);

    setArrayAfterFilterHolder(afterfilter);
    return;
  };

  const handleYearChange = event => {
    if (arrayAfterFilterHolder === null) {
      const afterYearFilter = cars.filter(carsYear => {
      return Number(carsYear.year) === Number(event.target.value) 
          //  carsYear;
      });
      setCarsListAfterFilter(afterYearFilter);
      return;
    }
    const afterFilter = arrayAfterFilterHolder.filter(data => {
    return Number(data.year) === Number(event.target.value) 
    });

    setCarsListAfterFilter(afterFilter);
    return;
  };
  const selecteOptionsMaker = arrayofYaerOrcarNames => {
    return arrayofYaerOrcarNames.map((options,i) => {
      return <MenuItem key={i} value={`${options}`}>{options}</MenuItem>;
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h4">Search by :</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">car Names</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={filterByCarsNamesChange}
        >
          <MenuItem  value="All">All cars</MenuItem>
          {selecteOptionsMaker(carsSelectOptions)}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="standard-basic"
          placeholder="between 2010-2020"
          type="number"
          onChange={handleYearChange}
          label="Year"
        />
      </FormControl>
      <DisplayCarList ListOfCars={carsListAfterFilter || cars} />
    </div>
  );
}

export default GetCarListAndDisplay;
