import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";
import { Provider } from "react-redux";
import store from "./store";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2sQcYCW6qpaCioNGiDsvpP8f2fAjLsWQ",
  authDomain: "doctor-chat-468af.firebaseapp.com",
  projectId: "doctor-chat-468af",
  storageBucket: "doctor-chat-468af.appspot.com",
  messagingSenderId: "27725015947",
  appId: "1:27725015947:web:cf592f027251e077119d8e",
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
