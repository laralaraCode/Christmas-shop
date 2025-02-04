
import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import christmasShopLogo6 from '/image/christmasShopLogo6.jpg';
import Cart from './Components/Cart/Cart';
import Home from './Components/ToysComponents/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import TotalArticlesNav from './Components/Cart/TotalArticlesNav';
import { useState } from 'react';
import MailContactForm from './Components/MailContactForm';



function App() {

  window.onscroll = function() {
    const hiddenNav = document.querySelector("#hiddenNav");
    const sticky = hiddenNav.offsetTop;

    if (window.pageYOffset > sticky + 100) {
      hiddenNav.classList.add("sticky");
      hiddenNav.classList.remove("hiddenNav")
      } else {
        hiddenNav.classList.remove("sticky");
        hiddenNav.classList.add("hiddenNav")      }
};

const [isActive, setActive] = useState(true);

const toggleCart = () => {
  setActive(!isActive);
};


const myFunctionMobilePlus =()=>{
  let links = document.querySelector("#hiddenLinks");
    if (links.style.display === "block" && window.innerWidth <= 1370) {
        links.style.display = "none";
    }
    else {
        links.style.display = "block";
        
    }

}


  return (
  <Router>
    <div className='App'>
        <p className='shipping greenback'>Доставка по Москве и регионам России</p>
    </div>

    <div className={isActive ? 'cartBlock close': 'cartBlock open'} >
    <Cart/>
    </div>
      <div className='App head'>
        <div className='cont'>
          <Link to="/"> 
          <img src = {christmasShopLogo6} width="100px" className='christmasShopLogo'/> 
          </Link>
        </div>

      <nav className='myNav'>
        <Link to="/" className='link'> МАГАЗИН </Link>
        <Link to="/about" className='link'> О НАС </Link>
        <Link to="/contact" className='link'>КОНТАКТЫ </Link>

        <span className='link'> | </span>


    <Link to="/" className='link btnMore'> 

<div className='cont'  >
  <button onClick={toggleCart} className='btnMore cont' > 
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16">
<path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg>

<span className='spanQuantityCart'> <TotalArticlesNav /> </span> 
    </button>
</div>

    </Link>
    </nav> 

    </div>

    <div className='hiddenNav' id='hiddenNav'>

    <nav className='secondeNav'  >

<div className='navLeft'>
  <Link to="/" className='linkSmall'> 
  <img src={ christmasShopLogo6 }  className="smalLogo" alt='logo' />

  </Link>

<div id='hiddenLinks'> 
  <div className='columnLinks'> 
  <Link to="/" className='linkSmall' onClick={myFunctionMobilePlus}> МАГАЗИН </Link>
  <Link to="/about" className='linkSmall' onClick={myFunctionMobilePlus}> О НАС </Link>
  <Link to="/contact" className='linkSmall' onClick={myFunctionMobilePlus}> КОНТАКТЫ </Link>
  </div>

</div>

  <div className ="burger">
      <button className="iconBurger"  onClick={myFunctionMobilePlus}>
      <i class="fa fa-bars" ></i>
      </button>
  </div>

  </div>
  
<div className='navRight'>
{/*
<Link to="/" className='link btnMore'> 
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
  </svg>
</Link>
*/}
<Link to="/" className='link btnMore'> 

<div className='cont'>

<button onClick={toggleCart} className='btnMore cont' > 
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg>
<span className='spanQuantityCart'> <TotalArticlesNav /> </span> 
</button>
</div>

</Link>
</div>

      </nav>

</div>
  
      <Routes>
        <Route path="/" element ={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>

      <div className='footer'>
      <div className='footerhead'>

      <div className='footerlinks'>
        <Link to="/" className='footerlink'> магазин </Link>
        <Link to="/about" className='footerlink'> о нас </Link>
        <Link to="/contact" className='footerlink'> контакты </Link>
      </div>

      <div className='footerlinks'>
      <a href="https://www.telegram.com/" target="_blank" className='footerlink' rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
        </svg>
      </a>


        <a href="https://wa.me/+74984955535" target="_blank" className='footerlink' rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </a>
      </div>

      <div className='footerlinks'>
        <button  className='footerlink'> Регистрация</button>
        <button  className='footerlink'>Подпишитесь, чтобы получать специальные предложения, бесплатные подарки и уникальные предложения.</button>
        <MailContactForm />
      </div>
      
      </div >
      <p className="footfoot App" >© 2024 ChristmasShop INC </p>
      <a className="footfoot App" href="https://christmas.com/" target="_blank" rel="noreferrer">Дизайн и разработка: Лариса Шакина</a>
      </div>

    </Router>
  );
}

export default App;


