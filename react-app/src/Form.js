import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar.js";
import Forms from "./Forms.js";
import Data from "./Data.js";
function Form(props) {
  const [data, setData] = useState([]);
  const elements = ["Yield", "Cost", "Soil Health"];
  // const [form, setForm] = useState(0);
  const handleClick = (e) => {
    console.log(e.target.id);
    const newData = elements.filter((item, index) => {
      return e.target.id - 1 != index;
    });
    setData(newData);
    console.log(newData);
  };
  if (props.form == 0) {
    return (
      <div>
        <form>
          <label for="1"> Yield</label>
          <input type="radio" name="Form" id="1" onClick={handleClick} />
          <label for="2"> Cost</label>
          <input type="radio" name="Form" id="2" onClick={handleClick} />
          <label for="3"> Soil Health</label>
          <input type="radio" name="Form" id="3" onClick={handleClick} />
        </form>

        <Forms {...data} form={props.form} setForm={props.setForm}>
          {" "}
        </Forms>
      </div>
    );
  } else {
    return <Data />;
  }
}
// Updates : Background image to be added
// States must be 0,0 : 0,1 : 1,0
// Input types is being done checkbox so that other input gets disappeared when clicking on the current input and others coming down
// Advanced : useRef hook for storing
// https://home.agromonitoring.com/auth/sign-up/
export default Form;
