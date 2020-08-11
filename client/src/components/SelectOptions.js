// // import React from 'react'

// // export default function SelectOptions(props) {
  
// //    const selecteOptionsMaker = arrayofYaerOrcarNames => {
// //     return arrayofYaerOrcarNames.map(options => {
// //       return <option value={`${options}`}>{options}</option>;
// //     });
// //   };
// //     return selecteOptionsMaker(props.options)
       
    
// // }
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import DisplayCarList from "./DisplayCarList";
// // import SelectOptions from "./SelectOptions";
// import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';

// const Styles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 250,
  
//   },
// }));
// function GetCarsList() {
//   const [cars, setCars] = useState([]);
//   const [carsSelectOptions, setCarsSelectOptions] = useState([]);
//   const [filter, setFilter] = useState(null);
//   const [carsListAfterFilter, setCarsListAfterFilter] = useState(null);
// const classes =Styles()
//   useEffect(() => {
//     axios.get("/getAllcars").then(res => {
//       console.log("effect");
//       // console.log(res.data);
//       if (res.status === 200) {
//         // getSelecteOptions(res.data ,'carsname')
//         const categorys = res.data.map(car => {
//           return car.make;
//         });
//         let unique = [...new Set(categorys)];

//         setCarsSelectOptions(unique);
//         return setCars(res.data);
//       }
//     });
//   }, []);

//   if (!cars) {
//     return <h1>loading ... </h1>;
//   }

//   const filterByCarsNamesChange = event => {
//     console.log(event.target.value);
//     if (event.target.value === "All Category") {
//       setCarsListAfterFilter(null);
//       setFilter(null);
//       return;
//       //show all cars to users
//     }

//     const afterfilter = cars.filter(cars => {
//       if (cars.make === event.target.value) {
//         return cars;
//       }
//     });
//     setCarsListAfterFilter(afterfilter);

//     setFilter(afterfilter);
//     return;
//   };

//   const hendelYearChange = event => {
//     if (filter === null) {
//       const afterYearFilter = cars.filter(carsYear => {
//         if (carsYear.year === Number(event.target.value)) {
//           return carsYear;
//         }
//       });
//       setCarsListAfterFilter(afterYearFilter);
//       return;
//     }

//     // console.log(filter, "filter");

//     const afterFilter = filter.filter(data => {
//       if (data.year === Number(event.target.value)) {
//         return data;
//       }
//     });

//     console.log(afterFilter, "afterFilter");
//     setCarsListAfterFilter(afterFilter);
//     return;
//   };
//   const selecteOptionsMaker = arrayofYaerOrcarNames => {
//     return arrayofYaerOrcarNames.map(options => {
//       return <MenuItem value={options}>{options}</MenuItem>;

//       // <option value={`${options}`}>{options}</option>;
//     });
//   };

//   return (
//     <div>
//       <FormControl className={classes.formControl}>
//   <InputLabel htmlFor="demo-simple-select-label">car Names</InputLabel>
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         value="none"
//         onChange={filterByCarsNamesChange}
//       >
//         <MenuItem value="All Category">All Category</MenuItem>
//         {selecteOptionsMaker(carsSelectOptions)}
//       </Select>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//        <InputLabel htmlFor="demo-customized-textbox">Yaer</InputLabel>
//       <TextField id="standard-basic"   onChange={hendelYearChange} label="Yer" />
//       </FormControl>
    
//       {/* <SelectOptions SelectOptions={carsCategory}/> */}
//       Year From 1992 to 2020 :{" "}
//       <input
//         placeholder="1992 to 2020"
//         type="number"
//         onChange={hendelYearChange}
//       />
//       <DisplayCarList ListOfCars={carsListAfterFilter || cars} />
//     </div>
//   );
// }

// export default GetCarsList;

// // Category: "Pickup"
// // Make: "Dodge"
// // Model: "Ram 3500 Regular Cab"
// // Year: 1999
// // createdAt: "2020-01-27T20:44:20.720Z"
// // objectId: "cqA9kgeSoU"
// // updatedAt: "2020-01-27T20:44:20.720Z"

// //Categories
// // SUV
// // Sedan
// // Coupe
// // Convertible
// // Hatchback
// // Pickup
// // Van
// // Minivan
// // Wagon
