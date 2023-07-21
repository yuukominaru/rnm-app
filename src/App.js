import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { NavbarComp } from "./components/NavbarComp";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
      {/* <CharactersList /> */}
    </div>
  );
}

export default App;
