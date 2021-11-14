import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
const App = () => {
  
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

  return (
    <div>
        
      <input placeholder="email" type="text" 
            onChange={(event)=> setEmail(event.target.value)}/>
      <input placeholder="password" type="password" 
            onChange={(xyz)=> setPassword(xyz.target.value)}/>
      <div>Email = {email}</div>
      <div>Password = {password}</div>
      {/*React Router Code*/}
      {/* <Link to="/1">Lets go to 1</Link>
      <Link to="/2">Lets go to 2</Link>
      <Routes>
        <Route path="/1" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
      </Routes> */}
      
    </div>
  );
};

export default App;
