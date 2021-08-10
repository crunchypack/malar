import { BrowserRouter, Route} from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Partners from './Components/Partners';
import Contact from './Pages/Contact';
import Services from './Pages/Services'


function App() {
  return (
    <div id='container'>
      <BrowserRouter>
        <Navbar/>
        <Route path='/' exact component={Home}/>
        <Route path='/kontakta-oss' component={Contact} />
        <Route path='/vara-tjanster' component={Services} />;
        <Partners />
        <Footer></Footer>
      </BrowserRouter>
    </div>
    

  );
}

export default App;
