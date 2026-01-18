import React from 'react';

const Cart = ({ cartItems, removeFromCart, totalPrice }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                {/* ✅ Thumbnail image */}
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="cart-item-img" 
                  />
                )}
                
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>${item.price} x {item.quantity}</p>
                </div>
                
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;