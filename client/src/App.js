import React,{useState , useEffect} from "react";
import GetCarListAndDisplay from "./components/GetCarListAndDisplay/GetCarListAndDisplay";
import './App.css'
import AppBar from "./components/AppBar/AppBar";
import { Router, Route, Switch ,BrowserRouter} from "react-router-dom";
import Register from "./components/Register/Register";
import history from './history'
import Login from './components/Login/Login'
import HomePage from "./components/HomePage/HomePage";


function App() {
  return (
    <Router history={history}>
    <div className="App">
       <AppBar/>
      <Route path="/" exact component={HomePage}></Route>

      <Route path="/ggg" exact component={GetCarListAndDisplay}></Route>

      <Route path="/register" exact component={Register}></Route>
      <Route path="/login" exact component={Login}></Route>

    </div>
    </Router>
  );
}
//
export default App;





{/* <Router history={history}>
<Header />
<div>
  <Switch>
    <Route path="/" exact component={SreamList}></Route>
    <Route path="/stream/Delete" exact component={StreamDelete}></Route>
    <Route path="/stream/Create" exact component={StreamCreate}></Route>
    <Route path="/stream/Edit/:id" exact component={StreamEdit}></Route>
    <Route
      path="/stream/Delete/:id"
      exact
      component={StreamDelete}
    ></Route>
    <Route path="/stream/:id" exact component={StreamShow}></Route>
  </Switch>
</div>
</Router> */}