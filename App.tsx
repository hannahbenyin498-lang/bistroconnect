
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Menu from './components/Menu';
import Concierge from './components/Concierge';
import Visualizer from './components/Visualizer';

const Home: React.FC = () => (
  <>
    {/* Hero Section with Video Background */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-transparent to-navy-deep z-10"></div>
        <video autoPlay muted loop playsInline className="video-bg absolute min-w-full min-h-full object-cover">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-gourmet-dish-34440-large.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-6xl font-serif font-bold text-white mb-4">The Art of <br/><span className="text-primary">Fine Dining.</span></h2>
        <p className="text-gray-400 max-w-lg text-lg mx-auto mb-10">Curated gourmet experiences delivered with precision to your doorstep.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/menu" 
            className="px-10 py-4 bg-primary text-black font-bold rounded-full transition-all shadow-lg hover:bg-primary-hover active:scale-95"
          >
            Explore Menu
          </Link>
          <Link 
            to="/reservations" 
            className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-md border border-white/20 transition-all active:scale-95"
          >
            Reserve Table
          </Link>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-24 bg-navy-main/50 backdrop-blur-md border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary">restaurant</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Gourmet Selection</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hand-picked dishes crafted by our award-winning chefs, available for delivery.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary">local_shipping</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Fast Delivery</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your order arrives hot and fresh within 45 minutes, guaranteed.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary">verified</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Quality Assured</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every dish meets our rigorous standards for taste and presentation.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <Menu />
    <Visualizer />
  </>
);

const ReservationPage: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-navy-deep py-32 px-4 pt-32">
      <div className="max-w-2xl mx-auto bg-navy-main glass-panel rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-navy-deep/80 p-8 text-center border-b border-white/10">
          <h2 className="text-3xl font-serif font-bold mb-2 text-white">Reserve a Table</h2>
          <p className="text-gray-400">Join us for an unforgettable culinary journey.</p>
        </div>
        
        {submitted ? (
          <div className="p-16 text-center">
            <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Reservation Confirmed</h3>
            <p className="text-gray-400 mb-8">We've sent a confirmation email with all your details. We look forward to serving you!</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-primary font-bold hover:text-primary-hover"
            >
              Make another reservation
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                <input required type="text" className="w-full p-4 bg-navy-card border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input required type="email" className="w-full p-4 bg-navy-card border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Guests</label>
                <select className="w-full p-4 bg-navy-card border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-primary outline-none transition-all">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Date</label>
                <input required type="date" className="w-full p-4 bg-navy-card border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-primary outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Special Requests</label>
              <textarea className="w-full p-4 bg-navy-card border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-primary outline-none transition-all h-24 resize-none" placeholder="Allergies, anniversaries, or seating preferences..."></textarea>
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-black py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95">
              Confirm Reservation
            </button>
          </form>
        )}
      </div>
      
      <div className="mt-12 text-center text-gray-400">
        <p className="flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-primary">support_agent</span>
          Prefer to talk? Visit our <Link to="/concierge" className="text-primary font-bold hover:text-primary-hover ml-1">AI Concierge</Link> for voice booking.
        </p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<div className="pt-20"><Menu /></div>} />
          <Route path="/reservations" element={<ReservationPage />} />
          <Route path="/concierge" element={<div className="pt-20"><Concierge /></div>} />
          <Route path="/visualizer" element={<div className="pt-20"><Visualizer /></div>} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
