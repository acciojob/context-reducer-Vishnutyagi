import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { userContext } from "./context";



ReactDOM.render(<userContext.Provider><App/></userContext.Provider>,document.getElementById('root'));