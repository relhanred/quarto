import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Board from "./pages/Board";
import Rules from "./pages/Rules";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/partie" element={<Board />} />
        <Route exact path="/regles" element={<Rules />} />
        <Route exact path="/histoire" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
