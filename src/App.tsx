import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return "Hello world";
}

export default App;
// fetch data from  https://jsonplaceholder.typicode.com/photos
// create list component
//   list item component
//     label <---> focused input onHover, onClick of canvas, onKeyUp Esc / Enter
//     display image ---> thumbnailUrl
//     <div>{Date.now()}</div>
//     conditionally render backgroundColor if id is even grey if odd white
//  Confirm Update
//   disabled by default ---> onChange of any listItem label it switches to active
//   onClick update all listItem(s)
//  Reset button
//     disabled by default
//     enabled when any listItem title has been changed
//     onClick all titles should reset to previous state without need of re fetching data from the API
