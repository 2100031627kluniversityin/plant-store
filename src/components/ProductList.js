import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const products = [
  {
    id: 1,
    name: "Fern",
    price: 10,
    image: "/assets/houseplants/Photo1.jpg",
  },
  {
    id: 2,
    name: "Succulent",
    price: 15,
    image: "/assets/houseplants/Photo2.jpg",
  },
  {
    id: 3,
    name: "Cactus",
    price: 20,
    image: "/assets/houseplants/Photo2.jpg",
  },
  {
    id: 4,
    name: "Orchid",
    price: 25,
    image: "/assets/houseplants/Photo2.jpg",
  },
  {
    id: 5,
    name: "Bamboo",
    price: 30,
    image: "/assets/houseplants/Photo2.jpg",
  },
  {
    id: 6,
    name: "Spider Plant",
    price: 12,
    image: "/assets/houseplants/Photo2.jpg",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart" onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
