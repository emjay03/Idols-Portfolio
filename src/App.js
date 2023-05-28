import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import Topvideos from "./Components/Topvideos";
import NayeonProfile from "./Components/NayeonProfile";
import JeongyeonProfile from "./Components/JeongyeonProfile";
import MomoProfile from "./Components/MomoProfile";
import SanaProfile from "./Components/SanaProfile";
import JihyoProfile from "./Components/JihyoProfile";
import MinaProfile from "./Components/MinaProfile";
import DahyunProfile from "./Components/DahyunProfile";
import ChaeyoungProfile from "./Components/ChaeyoungProfile";
import TzuyuProfile from "./Components/TzuyuProfile";
import Girlgroup from "./Components/Girlgroup";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="topvideos" element={<Topvideos />} />
          <Route path="nayeonprofile" element={<NayeonProfile />} />
          <Route path="jeongyeonprofile" element={<JeongyeonProfile />} />
          <Route path="momoprofile" element={<MomoProfile />} />
          <Route path="sanaprofile" element={<SanaProfile />} />
          <Route path="jihyoprofile" element={<JihyoProfile />} />
          <Route path="minaprofile" element={<MinaProfile />} />
          <Route path="dahyunprofile" element={<DahyunProfile />} />
          <Route path="chaeyoungprofile" element={<ChaeyoungProfile />} />
          <Route path="tzuyuprofile" element={<TzuyuProfile />} />
          <Route path="girlgroup" element={<Girlgroup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
