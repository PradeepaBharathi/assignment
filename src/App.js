
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Banner/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
