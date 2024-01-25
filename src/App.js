import "./App.css";
import NavBarr from "./Components/NavBarr";
import ForHim from "./Components/ForHim";
import ForHer from "./Components/ForHer";
import Cake from "./Components/Cake";
import Flower from "./Components/Flower";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonalizedGift from "./Components/PersonalizedGift";

function App() {
  return (
    <Router>
      <div>
        <NavBarr />
        <Routes>
          <Route path="/for-him" element={<ForHim />}></Route>
          <Route path="/for-her" element={<ForHer />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/flower" element={<Flower />} />
          <Route path="/Personalized-Gift" element={<PersonalizedGift />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
