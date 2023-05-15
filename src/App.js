import './App.css';
import Nav from './Components/Navbar'
import Hero from './Components/Hero'
import Section1 from './Components/Section1'
import AboutLanding from './Components/AboutLanding'
import Footer from './Components/Footer'
import About from './Pages/About'
import Gifts from './Pages/Gifts'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <>
    <Nav/>
    
    <Routes>
    <Route path='/' element={<><Hero/>
    <Section1/>
    <AboutLanding/></>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/gifts' element={<Gifts/>}/>
    </Routes>
    <Footer/>
    </>
    </BrowserRouter>
  );
}

export default App;
