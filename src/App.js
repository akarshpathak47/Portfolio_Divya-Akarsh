import React from "react";
import "./App.css";
import himani from './images/himani.jpg';
import Sidebar from "./components/Sidebar";
import About from "./components/About";




const App = () => {
  return (

    <div class="universal">
      
 <div class="wrapper" >
      <div class="side">
      <Sidebar ></Sidebar>
      </div>
      
     <div class="mainn">
      <img  class="mainimg"src={himani} alt="himani" />
      <div><About></About></div>
      
     </div>
     
    </div>

    <div></div>
    </div>
   
  );
};

export default App;