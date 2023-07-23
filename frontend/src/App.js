// import logo from './logo.svg';
// import './App.css';
import { Header } from './components/Header';
import { About } from './components/About';
import { Navbar } from './components/Navbar/Navbar';
import Testimonial  from './components/Testimonial/Testimonial';
import Products from './components/Products/Products';
import ContactUs from './components/ContactUs/ContactUs';
// import SellerDetail from './components/SellerDetails/SellerDetail';

import './App.css';

function App() {
  return (
    <div className="main">
      <Navbar/>
      {/* <SellerDetail/> */}
      {/* <Header/> */}
      {/* <About/> */}
      {/* <Products/> */}
      {/* <Testimonial/> */}
      {/* <ContactUs/> */}
    </div>
  );
}

export default App;