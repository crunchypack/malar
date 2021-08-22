import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Partners from "./Components/Partners";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Packages from "./Pages/Packages";
import ScrollToTop from "./Components/ScrollToTop";
import QualityAndEnv from "./Pages/QualityAndEnv";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <div >
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        
          <Route path="/" exact component={Home} />
          <Route path="/kontakta-oss" component={Contact} />
          <Route path="/vara-tjanster" component={Services} />
          <Route path="/renoveringspaket" component={Packages} />
          <Route path="/kvalitet-miljo" component={QualityAndEnv} />
          <Route path="/om-oss" component={AboutUs} />
        
        <Partners />
        <Footer></Footer>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
