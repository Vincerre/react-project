import ReactDOM from "react-dom";
import App from "./App";
import "./styles/normalize.scss";
import "./styles/global.scss";
import "font-awesome/css/font-awesome.min.css";

const container = document.querySelector("#root");

ReactDOM.render(<App />, container);
