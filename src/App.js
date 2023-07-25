import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { NavbarComp } from "./components/NavbarComp";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import Location from "./pages/Location";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/:id" element={<Character />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;
