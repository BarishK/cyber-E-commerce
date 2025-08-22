import "./style/Products.css";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/product";
import { ProductCard } from "../globalComponents/ProductCard";

export function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const productsData = await getAllProducts();
    setProducts(productsData);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productsPage container">
      <div className="productContent">
        <p>Selected Products: {products.slice(0, 12).length}</p>
      </div>
      <div className="productList">
        {products.slice(0, 12).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
