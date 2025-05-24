import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    // Clean up
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-300 font-medium">Loading Portfolio...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
