import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode> Removed strict mode for testing purposes for GeoCode API which has a free tier limit of
  //1 request per second
  <App />
  // </React.StrictMode>
);
