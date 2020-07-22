import React from "react";

interface Props {
  title: string;
  price: number;
  quantity?: number;
}

const Product: React.FC<Props> = ({ title, price, quantity }) => {
  return (
    <div>
      {title} - {price}
      {quantity ? ` x ${quantity}` : null}
    </div>
  );
};

export default Product;
