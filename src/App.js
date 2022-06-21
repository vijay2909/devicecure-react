import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header1 from "./Components/Header1";
import Header2 from "./Components/Header2";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Header1 />
        <Header2 />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
