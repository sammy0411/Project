import React, { Component, useState } from "react";
import logo from "./logo.svg";
import Data from "./Data.js";
// import './App.css';

function Forms(props) {
  // console.log(form);
  if (props.form == 0) {
    return (
      <div>
        <form>
          <label for="h1"> How are you?</label>
          <input type="text" id="h1" />

          <br></br>
          <label for="h2"> How are you?</label>
          <input id="h2" type="text" />

          <br></br>
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              props.setForm(1);
              console.log(props);
            }}
          />
        </form>
      </div>
    );
  }
}

export default Forms;
