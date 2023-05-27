import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import Topvideos from "./Components/Topvideos";
import ChaeyoungProfile from "./Components/ChaeyoungProfile";
import SanaProfile from "./Components/SanaProfile";
import Girlgroup from "./Components/Girlgroup";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="topvideos" element={<Topvideos />} />
          <Route path="chaeyoungprofile" element={<ChaeyoungProfile />} />
          <Route path="sanaprofile" element={<SanaProfile />} />
          <Route path="girlgroup" element={<Girlgroup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
