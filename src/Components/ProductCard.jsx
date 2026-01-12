import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const {
    id,
    title,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    thumbnail,
  } = data;

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2
  );

  const handleAddToCart = (e) => {
    e.preventDefault();
    // In a real app, you'd dispatch an action to add the item to the cart here.
    alert(`${title} added to cart!`);
  };

  return (
    <Link className="link" to={`/product/${id}`}>
      <div className="image-wrapper">
        <img src={thumbnail} alt={title} />
        <span className="discount-badge">
          {discountPercentage.toFixed(0)}% OFF
        </span>
      </div>

      <div className="product-info">
        <p className="brand">{brand}</p>
        <h3 className="title">{title}</h3>

        <div className="price-container">
          <span className="price">₹{discountedPrice}</span>
          <span className="original-price">₹{price}</span>
        </div>

        <div className="meta">
          <span>⭐ {rating}</span>
          <span>{stock > 0 ? `${stock} in stock` : "Out of Stock"}</span>
        </div>

        <button className="add-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </Link>
  );
};

export default ProductCard;