import "./App.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function App() {
  return (
    <div className="App">
      //broken Header
      <Header />
      <header className="App-Header">
        <p className="Header-Text">Weather Station Data</p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
