import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
