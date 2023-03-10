import IntroSection from "./components/IntroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
function App() {
  return ( 
    <div className="App">
       {/* <Navigation/>  */}
       <Socials/>
       <IntroSection/>
       <About/>
       <Skills/>
       <Portfolio/>
       <Contact />
    </div> 
  );
}


export default App;