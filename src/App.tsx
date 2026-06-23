import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';
import { Home, Discover, Gallery, Portfolio, Blogs, Contact, Corporate, Experiential, Weddings, Social, EnterpriseROISeries, ComingSoonSeries, AuraResonanceArticle, EnterpriseGuideBudgetsArticle } from './pages';
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
              <Route path="/blog/the_enterprise_ROI_series" element={<EnterpriseROISeries />} />
              <Route path="/blog/borderless_logistics" element={<ComingSoonSeries title="Borderless Logistics & Scale" />} />
              <Route path="/blog/risk_mitigation" element={<ComingSoonSeries title="Risk Mitigation" />} />
              <Route path="/blog/enterprise_procurement_&_budget_optimization" element={<ComingSoonSeries title="Enterprise Procurement & Budget Optimization" />} />
              <Route path="/blog/the-enterprise-roi-series/blending-5ps-7ps-into-aura-resonance-framework" element={<AuraResonanceArticle />} />
              <Route path="/blog/the-enterprise-roi-series/the-enterprise-guide-to-forecasting-budgets-and-eliminating-hidden-costs-in-global-mice" element={<EnterpriseGuideBudgetsArticle />} />
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
