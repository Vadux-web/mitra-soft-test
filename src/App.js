import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/Navibar/Navibar.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import DetailsContainer from "./components/Details/DetailsContainer";

let App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navibar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/*" element={<DetailsContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

//TODO File structure
//TODO Bootstrap ThemeProvider
