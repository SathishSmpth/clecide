// import Navbar from "./components/Navbar/Navbar.js";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo.js";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import Footer from "./components/Footer";
import ResponsiveAppBar from  "./components/Navbar/ResponsiveNavbar.tsx";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <ResponsiveAppBar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Footer/>
    </div>
  );
}

export default App;
