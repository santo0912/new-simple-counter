//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let seg1 = 0
let seg2 = 0
let min1 = 0   
let min2 = 0
let hora1 = 0
let hora2 = 0

setInterval(SecondsCounter,1000);

function SecondsCounter() {
    seg1++;
    if (seg1 > 9) {
        seg2++;
        seg1 = 0;
    }
    if (seg2 > 5) {
        min1++;
        seg2 = 0;
    }
    if (min1 > 9) {
        min2++;
        min1 = 0;
    }
    if (min2 > 5) {
        hora1++;
        min2 = 0;
    }
    if (hora1 > 9) {
        hora2++;
        hora1 = 0;
    }
    if (hora2 > 9) {
        hora2++;
    }
    console.log(hora2,hora1,min2, min1,seg2,seg1);
    
    ReactDOM.render(<Home seg1={seg1} seg2={seg2} min1={min1} min2={min2} hora1={hora1} hora2={hora2} />, document.querySelector("#app"));
 }

// setCounter (() => {

// }) 

 