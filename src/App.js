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
import LesserafimProfile from "./Components/LesserafimProfile";
import GidleProfile from "./Components/GidleProfile";
import Girlgroup from "./Components/Girlgroup";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="topvideos" element={<Topvideos />} />
          <Route path="twice/nayeon" element={<NayeonProfile />} />
          <Route path="twice/jeongyeon" element={<JeongyeonProfile />} />
          <Route path="twice/momo" element={<MomoProfile />} />
          <Route path="twice/sana" element={<SanaProfile />} />
          <Route path="twice/jihyo" element={<JihyoProfile />} />
          <Route path="twice/mina" element={<MinaProfile />} />
          <Route path="twice/dahyun" element={<DahyunProfile />} />
          <Route path="twice/chaeyoung" element={<ChaeyoungProfile />} />
          <Route path="twice/tzuyu" element={<TzuyuProfile />} />
          <Route path="lesserafim/chaewon" element={<ChaewonProfile />} />
          <Route path="lesserafim/sakura" element={<SakuraProfile />} />
          <Route path="lesserafim/yunjin" element={<YunjinProfile />} />
          <Route path="lesserafim/kazuha" element={<KazuhaProfile />} />
          <Route path="lesserafim/eunchae" element={<EunchaeProfile />} />
          <Route path="g-idle/miyeon" element={<MiyeonProfile />} />
          <Route path="g-idle/minnie" element={<MinnieProfile />} />
          <Route path="g-idle/soyeon" element={<SoyeonProfile />} />
          <Route path="g-idle/yuqi" element={<YuqiProfile />} />
          <Route path="g-idle/shuhua" element={<ShuhuaProfile />} />
          <Route path="itzy/yeji" element={<YejiProfile />} />
          <Route path="itzy/lia" element={<LiaProfile />} />
          <Route path="itzy/ryujin" element={<RyujinProfile />} />
          <Route path="itzy/chaeryoung" element={<ChaeryoungProfile />} />
          <Route path="itzy/yuna" element={<YunaProfile />} />
          <Route path="twice" element={<TwiceProfile />} />
          <Route path="lesserafim" element={<LesserafimProfile />} />
          <Route path="g-idle" element={<GidleProfile />} />
          <Route path="girlgroup" element={<Girlgroup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
