import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar.js";
import Form from "./Form.js";
function App() {
  const [toggle, setToggle] = useState(0);
  const [toggle2, setToggle2] = useState(0);
  const [form, setForm] = useState(0);
  if (form == 0) {
    return (
      <div className="App">
        <Navbar />
        <p> This is a farmer app</p>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Get Started
        </button>
        <button> Livestock </button>

        {toggle ? <Form form={form} setForm={setForm} /> : null}
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        <p> This is a farmer app</p>

        {toggle ? <Form form={form} setForm={setForm} /> : null}
      </div>
    );
  }
}
// Updates : Background image to be added
// States must be 0,0 : 0,1 : 1,0
export default App;
