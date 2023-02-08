import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <header className="App-Header">
          <p className="Header-Text">Weather Station Data</p>
        </header>
      </div>
    </Router>
  );
}

export default App;
