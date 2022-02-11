import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About/About';
import Footer from './shared/Footer/Footer';
import logo from './logo.svg';
// import './App.css';
import Test from './pages/Test';
import Header from './shared/Hearder/Header';
import Home from './pages/Home/Home';
import Offer from './pages/Offer/Offer';
import Contact from './pages/Contact/Contact';
import Demo from './pages/Demo/Demo';

function App() {
  return (
    <>
      {/* <Test/> */}
      {/* <Footer></Footer> */}
      {/* <About></About> */}
      {/* <Demo></Demo> */}
      <div id="canvas">
        <div id="box_wrapper">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="offer" element={<Offer />} />
              <Route path="contact" element={<Contact />} />
              <Route path="demo" element={<Demo/>}/>
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
