import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';
import { Home, Discover, Gallery, Portfolio, Blogs, Contact, Corporate, Experiential, Weddings, Social } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        {/* Main Content Wrapper - Acts as curtain that lifts up */}
        <div className="main-wrapper">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/corporate-events" element={<Corporate />} />
              <Route path="/experiential-events" element={<Experiential />} />
              <Route path="/weddings-events" element={<Weddings />} />
              <Route path="/social-events" element={<Social />} />
              <Route path="/portfolio/*" element={<Portfolio />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
        
        {/* Footer - Fixed underneath, revealed as curtain lifts */}
        <div className="footer-wrapper">
          <Footer />
        </div>

        {/* Aurie - Premium ChatBot Assistant */}
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
