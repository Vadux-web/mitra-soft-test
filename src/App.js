import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./Components/Navibar.jsx";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import About from "./Components/About";

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
