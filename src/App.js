import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Footer" element={<Footer />} />
          

        </Routes>
      </Router>
 <Main />
 <Footer/>
    </div>
  );
}

export default App;
