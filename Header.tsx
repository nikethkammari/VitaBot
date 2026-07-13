import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Chatbot from './pages/Chatbot';
import Diseases from './pages/Diseases';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Home />
        <About />
        <Chatbot />
        <Diseases />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
