import LogoSection from "./components/LogoSection";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";

const App = () => {
    return ( 
    <main>
        <Navbar/>
        <Hero/>
        <ShowcaseSection/>
        <LogoSection/>
    </main> );
}
 
export default App;