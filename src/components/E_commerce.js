import React from 'react'

function E_commerce() {
  return (
<div>
     <header>
     <h1>Agriculture Store</h1>
     <input type="text" placeholder="Search for products..." class="search-bar" />
 </header>
 
 <main>
     <h2>Featured Products</h2>
     <div class="product-grid">
         <div class="product-card">
             <img src="https://via.placeholder.com/150" alt="Pesticide" />
             <h3>Organic Pesticide</h3>
             <p>Price: $12.99</p>
             <button>Add to Cart</button>
         </div>
         <div class="product-card">
             <img src="https://via.placeholder.com/150" alt="Shovel" />
             <h3>Garden Shovel</h3>
             <p>Price: $24.99</p>
             <button>Add to Cart</button>
         </div>
         <div class="product-card">
             <img src="https://via.placeholder.com/150" alt="Seeds" />
             <h3>Flower Seeds</h3>
             <p>Price: $5.99</p>
             <button>Add to Cart</button>
         </div>
         <div class="product-card">
             <img src="https://via.placeholder.com/150" alt="Fertilizer" />
             <h3>Organic Fertilizer</h3>
             <p>Price: $19.99</p>
             <button>Add to Cart</button>
         </div>
     </div>
 </main>

 <footer>
     <p>&copy; 2024 Agriculture Store. All rights reserved.</p>
 </footer>
 </div>
  )
}

export default E_commerce