import React from "react";

interface Props {
  title: string;
  children: any;
}

const ProductList = ({ title, children }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default ProductList;
