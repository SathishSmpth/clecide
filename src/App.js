import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo.js";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/Navbar/ResponsiveNavbar.tsx";
import SectionFive from "./components/SectionFive";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}

export default App;
