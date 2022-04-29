import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./common/Navibar/Navibar.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Gallery from "./screens/Gallery/Gallery";
import About from "./screens/About/About";
import DetailsContainer from "./containers/DetailsContainer";
import { StyledContainer } from "./Styles";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navibar />
        <StyledContainer>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/details/:id" element={<DetailsContainer />} />
          </Routes>
        </StyledContainer>
      </BrowserRouter>
    </div>
  );
};

export default App;

//TODO File structure
//TODO marginTop: "100px"
