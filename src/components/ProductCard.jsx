import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {/* Placeholder for product image */}
        <img src={product.image} alt={product.name} className="product-img" />
        <div className="image-placeholder">{product.name.charAt(0)}</div>
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">${product.price}</p>
      <button 
        className="add-to-cart-btn"
        data-testid={`product-${product.id}`} 
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
      
    </div>
  
  );
};

export default ProductCard;