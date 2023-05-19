 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

import Home from "./Components/Home";
import Topvideos from './Components/Topvideos';

function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
        <Route path="/*" element={<Home />} />
          <Route path="topvideos" element={<Topvideos />} />
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;
