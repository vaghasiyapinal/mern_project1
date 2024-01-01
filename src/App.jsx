import{BrowserRouter,Route,Routes} from "react-router-dom";
import {Home}from"./pages/Home";
//import {About}from"./pages/About";
//import {Contact}from"./pages/Contact";
//import {Service}from"./pages/Service";
//import {Register}from"./pages/Register";
//import {Login}from"./pages/Login";
//import {Navbar}from "./components/Navbar";

const App = ()=>{
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    
  </Routes>
  </BrowserRouter>)
};

export default App;