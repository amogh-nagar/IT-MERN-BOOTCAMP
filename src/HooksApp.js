import React, { useState, useEffect } from "react";
const App = () => {
  // var x = 5;
  const [X, updateX] = useState(1);

  const clickHandler = () => {
    // x++;
    updateX(X * 2);
  };

  const dividehandler = () => {
    updateX(X / 2);
  };

  // useEffect(() => {

  //   //Everytime when app component renders
  //   console.log("Inside useEffect");
  // });
  // useEffect(() => {
  //   console.log("Inside useEffect");
  //   console.log(X);
  //   // console.log(Y);
  // },[X]); // First time + when sonme of the dependency changes
  // only for first time when component will render

  // "[ "name","class"]"
  // "{"name":"Amogh"}a"
  
  
  
  
  //FETCHING Data from an API and displaying it on our website
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const JSONResponse = await data.json();
      setdata(JSONResponse);
    };
    fetchdata();
  }, []);
  return (
    <div>
      <h1>{X}</h1>
      {data.map((obj) => {
        return <p>{obj.title}</p>;
      })}
      <button onClick={clickHandler}>*</button>
      <button onClick={dividehandler}>/</button>
    </div>
  );
};

export default App;
