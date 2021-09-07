import React from 'react';
import "./Navbar.css"

function Navbar() {
    return (
        <div className="main">
          <div className="dropdown">
           <button className="dropbtn">Mens</button>
  <div className="dropdown-content">
  <a href="#">Shirts</a>
  <a href="#">T-shirts</a>
  <a href="#">Jeans</a>
  <a href="#">Trousers</a>
  </div>
  
</div>
<div className="dropdown">
           <button class="dropbtn">Womens</button>
  <div className="dropdown-content">
  <a href="#">Sarees</a>
  <a href="#">Tops</a>
  <a href="#">Jeans</a>
  <a href="#">Shoes</a>
  </div>
  
</div>
<div className="dropdown">
           <button class="dropbtn">Kids</button>
  <div className="dropdown-content">
  <a href="#">shorts</a>
  <a href="#">T-shirts</a>
  <a href="#">jeans</a>
  </div>
  
</div>
<div className="dropdown">
           <button class="dropbtn">Accesories</button>
  <div className="dropdown-content">
  <a href="#">Belts</a>
  <a href="#">Socks</a>
  
  </div>
  
</div>
<div className="dropdown">
           <button class="dropbtn">Electronics</button>
  <div className="dropdown-content">
  <a href="#">TV</a>
  <a href="#">Refrigerator</a>
  <a href="#">Mobile</a>
  </div>
  
</div>
<div className="dropdown">
           <button class="dropbtn">Jewellary</button>
  <div className="dropdown-content">
  <a href="#">Bangles</a>
  <a href="#">Necklace</a>
  <a href="#">Ear-rings</a>
  </div>
  
</div>
<div className="dropdown">
           <button class="dropbtn">Toys</button>
  <div className="dropdown-content">
  <a href="#">Teddy-bear</a>
  <a href="#">Dolls</a>
  <a href="#">Cars</a>
  </div>
  
</div>
<div className="dropdown">
           <button class="dropbtn">Home & Living</button>
  <div className="dropdown-content">
  <a href="#">Bedsheets</a>
  <a href="#">Towels</a>
  <a href="#">Carpets</a>
 
  </div>
  
</div>

        </div>
    )
}

export default Navbar
