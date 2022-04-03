import ReactDOM from "react-dom";
import App from "./App";
// import { store } from "./redux/store";
// //import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/lib/integration/react";

ReactDOM.render(
  // <PersistGate loading={null} persistor={store.persistor}>

  <App />,
  // </PersistGate>,
  document.getElementById("root")
);
