import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CursorGlow from './components/common/CursorGlow';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background dark:bg-slate-950 text-textMain dark:text-white relative overflow-hidden">
        <CursorGlow />
        <Navbar />
        <main className="flex-grow z-10">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
