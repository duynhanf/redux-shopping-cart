import React from "react";
import Product from "../components/Product";

interface ProductItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface Props {
  product: ProductItem;
  onAddToCartClicked: Function;
}

const ProductItem = ({ product, onAddToCartClicked }: Props) => {
  return (
    <div>
      <Product title={product.title} price={product.price} />
      <button onClick={() => onAddToCartClicked(product.id)}>Sold out</button>
    </div>
  );
};

export default ProductItem;
