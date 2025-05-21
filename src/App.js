import './App.css';
import Header from './components/Header';
import Hero from './components/Hero.jsx';
import TechStack from './components/TechStack.jsx';
import Project from './components/Project.jsx';
import Graphics from './components/Graphics.tsx';
import MessageMe from './components/MessageMe.jsx';
import Footer from './components/Footer.jsx';
import SoftwareSkills from './components/SoftwareSkills.jsx';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <TechStack />
      <SoftwareSkills />
      <Project />
      <Graphics />
      <MessageMe />
      <Footer />
    </>
  );
}

export default App;
