import './App.css';
import Header from './components/Header';
import Body from './components/Body.jsx';
import TechStack from './components/TechStack.jsx';
import Project from './components/Project.jsx';
import Graphics from './components/Graphics.tsx';
import MessageMe from './components/MessageMe.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <Body />
      <TechStack />
      <Project />
      <Graphics />
      <MessageMe />
      <Footer />
    </>
  );
}

export default App;
