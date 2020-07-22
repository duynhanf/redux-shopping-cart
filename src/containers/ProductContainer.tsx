import React from "react";
import ProductItem from "../components/ProductItem";
import ProductList from "../components/ProductList";

const ProductContainer = () => {
  const products = [
    {
      id: 1,
      title: "Ipad 4",
      price: 123.34,
      quantity: 12
    },
    {
      id: 2,
      title: "Ipad 5",
      price: 123.34,
      quantity: 12
    },
    {
      id: 3,
      title: "Ipad 6",
      price: 123.34,
      quantity: 12
    }
  ];
  const addToCart = (id: number) => {
    console.log("addToCart");
    console.log(id);
  };
  return (
    <ProductList title="Products">
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={addToCart}
        />
      ))}
    </ProductList>
  );
};

export default ProductContainer;
