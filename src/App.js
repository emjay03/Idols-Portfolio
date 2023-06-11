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
import ChaewonProfile from "./Components/ChaewonProfile";
import SakuraProfile from "./Components/SakuraProfile";
import YunjinProfile from "./Components/YunjinProfile";
import KazuhaProfile from "./Components/KazuhaProfile";
import EunchaeProfile from "./Components/EunchaeProfile";
import MiyeonProfile from "./Components/MiyeonProfile";
import MinnieProfile from "./Components/MinnieProfile";
import SoyeonProfile from "./Components/SoyeonProfile";
import YuqiProfile from "./Components/YuqiProfile";
import ShuhuaProfile from "./Components/ShuhuaProfile";
import YejiProfile from "./Components/YejiProfile";
import LiaProfile from "./Components/LiaProfile";
import RyujinProfile from "./Components/RyujinProfile";
import ChaeryoungProfile from "./Components/ChaeryoungProfile";
import YunaProfile from "./Components/YunaProfile";
import TwiceProfile from "./Components/TwiceProfile";
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
          <Route path="chaewonprofile" element={<ChaewonProfile />} />
          <Route path="sakuraprofile" element={<SakuraProfile />} />
          <Route path="yunjinprofile" element={<YunjinProfile />} />
          <Route path="kazuhaprofile" element={<KazuhaProfile />} />
          <Route path="eunchaeprofile" element={<EunchaeProfile />} />
          <Route path="miyeonprofile" element={<MiyeonProfile />} />
          <Route path="minnieprofile" element={<MinnieProfile />} />
          <Route path="soyeonprofile" element={<SoyeonProfile />} />
          <Route path="yuqiprofile" element={<YuqiProfile />} />
          <Route path="shuhuaprofile" element={<ShuhuaProfile />} />
          <Route path="yejiprofile" element={<YejiProfile />} />
          <Route path="liaprofile" element={<LiaProfile />} />
          <Route path="ryujinprofile" element={<RyujinProfile />} />
          <Route path="chaeryoungprofile" element={<ChaeryoungProfile />} />
          <Route path="yunaprofile" element={<YunaProfile />} />
          <Route path="twiceprofile" element={<TwiceProfile />} />
          <Route path="girlgroup" element={<Girlgroup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
