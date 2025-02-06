import useFetchData from "../../hooks/useFetchData";

const { useState, useEffect } = require("react");

function ProductList() {
    const products = useFetchData('/api/products');
    return <ProductList products={products} />;
  }

export default ProductList
  