import React from 'react';
import ProductCard from './ProductCard';

// ✅ Exported so tests can access it
export const sampleProducts = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics', image: 'https://images.pexels.com/photos/7670738/pexels-photo-7670738.jpeg' },
  { id: 2, name: 'Headphones', price: 199, category: 'Electronics', image: 'https://images.pexels.com/photos/14935011/pexels-photo-14935011.jpeg' },
  { id: 3, name: 'T-Shirt', price: 29, category: 'Clothing', image: '/images/tshirt.png' },
  { id: 4, name: 'Jeans', price: 79, category: 'Clothing', image: '/images/jeans.png' },
  { id: 5, name: 'Coffee Maker', price: 149, category: 'Home', image: '/images/coffeemaker.png' },
  { id: 6, name: 'Blender', price: 89, category: 'Home', image: '/images/blender.png' },
  { id: 7, name: 'Apple', price: 2, category: 'Fruits', image: '/images/apple.png' },
  { id: 8, name: 'Milk', price: 3, category: 'Home', image: '/images/milk.png' }
];

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
