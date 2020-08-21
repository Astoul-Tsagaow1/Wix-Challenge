import React,{useEffect ,useState} from 'react';
import axios from 'axios'
import displayCarList from '../DisplayCarList/DisplayCarList';
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import './homepage.css'
import AppBar from './../AppBar/AppBar';
export default function HomePage() {
    return ( <div className="home-page" >
        <div className="home-page-Ditailes">
             <Box  >
         <h1>Welcome As cars catalog, please..</h1>
                <Link to="/register"> Register </Link>||
                <Link to="/login"> Login </Link>
              </Box>
        </div>
        
        </div>
    )
}
