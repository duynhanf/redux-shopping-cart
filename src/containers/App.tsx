import React from "react";
import ProductContainer from "./ProductContainer";
import CartContainer from "./CartContainer";

const App = () => {
  return (
    <div className="App">
      <h1>RexUI shopping cart</h1>
      <ProductContainer />
      <CartContainer />
    </div>
  );
};

export default App;
