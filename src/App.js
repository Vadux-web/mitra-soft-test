import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/Navibar/Navibar.jsx";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import About from "./components/About/About";

let App = () => {
  return (
    <div>
      <Router>
        <Navibar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
