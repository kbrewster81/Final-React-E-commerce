import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";


function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Route path="/Books" component={Books} />
        <Route path="/" exact component={Home} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
