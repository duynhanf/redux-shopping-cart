import React from "react";
import Button from "@rakuten-rex/button";
import Product from "./Product";

interface Props {
  products: any[];
}

const Cart = ({ products }: Props) => {
  const price = 12;
  const hasProducts = products && products.length > 0;
  const productsNode = hasProducts ? (
    products.map((product, index) => {
      return <Product key={index} title="abc" price={price} />;
    })
  ) : (
    <p>Please add some products to cart.</p>
  );
  return (
    <div>
      <h3>Your cart</h3>
      {productsNode}
      <p>Total: ¥0.00</p>
      <Button>Checkout</Button>
    </div>
  );
};

export default Cart;
