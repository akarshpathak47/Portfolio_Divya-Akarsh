import React from "react";
import "./App.css";
import { Routes,Route} from 'react-router-dom'; 
import Home from "./components/Home";

import Resume from "./components/Resume";



function App() {
  
  return (
    <div className="App">
       <Routes>
  <Route path="/"  element={<Home/>} />
  <Route path="/resume" element={<Resume />} />
  
  
  
       </Routes>
    </div>

  );
    
}

export default App;