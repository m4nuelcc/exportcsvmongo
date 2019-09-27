import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} from "mongodb-stitch-browser-sdk";

//poner la id del proyecto de stitch

export const stitch = Stitch.initializeDefaultAppClient("ID-STITCH");
export const mongo = stitch.getServiceClient(
  RemoteMongoClient.factory,
  "mongodb-atlas"
);

// para logearte en stitch

if (!stitch.auth.isLoggedId) {
  stitch.auth.loginWithCredential(new AnonymousCredential());
}

console.log("logged?", stitch.auth.isLoggedIn);

ReactDOM.render(<App />, document.getElementById("root"));
