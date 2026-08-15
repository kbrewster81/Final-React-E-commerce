import "./App.css";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Highlight from "./components/ui/Highlight";
import Featured from "./components/Featured";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlight />
      <Featured />
    </div>
  );
}

export default App;
