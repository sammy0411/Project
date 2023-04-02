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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap"
          rel="stylesheet"
        ></link>
        <Navbar />
        {/* <p> This is a farmer app</p> */}
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          className="btn-1"
        >
          Get Started
        </button>
        <button className="btn-2"> Livestock </button>

        {toggle ? <Form form={form} setForm={setForm} /> : null}
      </div>
    );
  } else {
    return (
      <div className="App">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap"
          rel="stylesheet"
        ></link>
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

// All that remains is backend by making security and authorization , api fetch , route setup , backend database then we are done
