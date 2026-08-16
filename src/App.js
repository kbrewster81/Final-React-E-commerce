import "./App.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Highlight from "./components/ui/Highlight";
import Featured from "./components/Featured";
import Discounted from "./components/Discounted";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlight />
      <Featured />
      <Discounted />
    </div>
  );
}

export default App;
