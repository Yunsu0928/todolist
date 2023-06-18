import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store.js";

const root = ReactDOM.createRoot(document.getElementById("root")); //최신버전 react18이상
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
