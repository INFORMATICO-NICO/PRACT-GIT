//Codigo de xml y js combinado = jsx

import React from "react";
import ReactDOM from "react-dom/client";

import { FirstApp} from "./FirstApp";
// import {Counter} from './CounterApp';

import './styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Counter value={20} /> */}
    <FirstApp title="Hola,Soy Nicolas un dios"/>
  </React.StrictMode>
);
