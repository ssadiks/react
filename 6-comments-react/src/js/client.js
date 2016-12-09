import React from "react";
import ReactDOM from "react-dom";

//import App from "./components/App";



const app = document.getElementById('app');
//ReactDOM.render(<App/>, app);

// Notice that we've organized all of our routes into a separate file.
import Router from './router';

// Now we can attach the router to the 'root' element like this:
ReactDOM.render(Router, app);