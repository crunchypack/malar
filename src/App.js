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

function App() {
  return (
    <div id="container">
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        
          <Route path="/" exact component={Home} />
          <Route path="/kontakta-oss" component={Contact} />
          <Route path="/vara-tjanster" component={Services} />
          <Route path="/renoveringspaket" component={Packages} />
        
        <Partners />
        <Footer></Footer>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
