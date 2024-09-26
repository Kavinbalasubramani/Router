
import './App.css';
import Home from './Home';
import Product from './Product';
import Contact from './Contact';
import Productpage from './Productpage';
import Pic2 from './Pic2';
import Pic from './Pic';
import Pic3 from './Pic3';

import {Link, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <nav>
          <ul id='ul'>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/product">PRODUCT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>
        <Routes>
           <Route path='/' element={<Home />}/>
           
          <Route path='/product' element={<Productpage />} >
              <Route index element={<Product />} />
              <Route path="/product/1" element={<Pic/>} />
              <Route path='/product/2' element={<Pic2/>}/>
              <Route path='/product/3' element={<Pic3/>}/>
            
        </Route>

        
       
        <Route path='/contact' element={<Contact />}/>
        </Routes>
      {/* <Home/>
      <Product/>
      <Contact/> */}
    </div>
  );
}

export default App;
