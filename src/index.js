import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import cartReducer from "./components/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";


const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
