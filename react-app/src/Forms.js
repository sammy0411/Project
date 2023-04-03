import React, { Component, useState } from "react";
import logo from "./logo.svg";
import Data from "./Data.js";
import Data2 from "./datacrops.js";
// import './App.css';

function Forms(props) {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(null);

  if (props.form == 0) {
    return (
      <div className="temp">
        <div className="selected">
          {options.map((curr_val, curr_idx, arr) => {
            // console.log(curr_idx);
            return (
              <div className="spacing">
                <div className="new">{curr_val} </div>
                <button
                  className="del"
                  onClick={() => {
                    console.log(curr_idx);
                    let h = options.filter((curr_val, curr_idx2, arr) => {
                      return curr_idx2 != curr_idx;
                    });
                    console.log(h);
                    setOptions(h);
                  }}
                >
                  {" "}
                  Delete{" "}
                </button>
              </div>
            );
          })}
        </div>
        <form>
          <label htmlFor="h1"> What type of crop do you wish to grow? </label>
          {/* <input type="text" id="h1" /> */}
          <select
            onChange={(e) => {
              let value = e.target.value;
              e.target.value = "";
              if (value === null) return;
              console.log("Changed");
              let h = options.find((val) => {
                if (val === value) {
                  return val;
                }
              });
              console.log(h);
              if (h) {
                return;
              } else {
                setOptions([...options, value]);
                // console.log(options);
              }
            }}
          >
            <option hidden disable selected value></option>
            {Data2.map((curr_val, curr_idx, arr) => {
              let h = options.find((curr_val2, curr_idx, arr) => {
                return curr_val2 === curr_val.name;
              });
              // console.log(h);
              return (
                <option>
                  {" "}
                  {curr_val.name} {h ? "✔" : " "}{" "}
                </option>
              );
            })}
          </select>
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

// “Fifty degrees is a good benchmark for cool-season crops,” Weston said. “And the soil should be 60 degrees or more for warm-weather plants like tomatoes, peppers and basil. In fact, for tomatoes it should ideally be 65 to 70.”
// https://eos.com/blog/soil-temperature/ What crop is optimal. And recommend changes to change the temperature of soil.
// I have to declare a global variable type context now;
