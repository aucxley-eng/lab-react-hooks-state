import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import DarkModeToggle from './components/DarkModeToggle';

// ✅ Exported so tests can access it
export const Products = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics', image: 'https://images.pexels.com/photos/7670738/pexels-photo-7670738.jpeg' },
  { id: 2, name: 'Headphones', price: 199, category: 'Electronics', image: 'https://images.pexels.com/photos/14935011/pexels-photo-14935011.jpeg' },
  { id: 3, name: 'T-Shirt', price: 29, category: 'Clothing', image: 'https://images.pexels.com/photos/2451200/pexels-photo-2451200.jpeg' },
  { id: 4, name: 'Jeans', price: 79, category: 'Clothing', image: 'https://images.pexels.com/photos/24513229/pexels-photo-24513229.jpeg' },
  { id: 5, name: 'Coffee Maker', price: 149, category: 'Home', image: 'https://images.pexels.com/photos/6032799/pexels-photo-6032799.jpeg' },
  { id: 6, name: 'Blender', price: 89, category: 'Home', image: 'https://images.pexels.com/photos/16969212/pexels-photo-16969212.jpeg' },
  { id: 7, name: 'Apple', price: 2, category: 'Fruits', image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg' },
  { id: 8, name: 'Milk', price: 3, category: 'Home', image: 'https://images.pexels.com/photos/30731012/pexels-photo-30731012.jpeg' }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // ✅ Use Products instead of sampleProducts
  const categories = ['All', ...new Set(Products.map(product => product.category))];

  const filteredProducts = selectedCategory === 'All' 
    ? Products 
    : Products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <h1>Shopping App</h1>
        <div className="header-controls">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-filter"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <DarkModeToggle 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
          />
        </div>
      </header>
      
      <main className="app-main">
        <ProductList 
          products={filteredProducts} 
          addToCart={addToCart} 
        />
        <Cart 
          cartItems={cartItems} 
          removeFromCart={removeFromCart}
          totalPrice={totalPrice}
        />
      </main>
    </div>
  );
}

export default App;
