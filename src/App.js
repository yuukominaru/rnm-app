import "./App.css";
import { Navbar } from "./components/Navbar";
import CharactersList from "./pages/CharactersList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CharactersList />
    </div>
  );
}

export default App;
