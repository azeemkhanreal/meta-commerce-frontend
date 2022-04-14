import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store, persistor } from "./app/store";
import { Provider } from "react-redux";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
