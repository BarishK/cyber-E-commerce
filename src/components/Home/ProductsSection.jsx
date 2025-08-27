import { useEffect, useState } from "react";
import { ProductCard } from "../globalComponents/ProductCard";
import "./style/ProductsSection.css";
import { getAllProducts } from "../../api/product";

export function ProductsSection() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const productsData = await getAllProducts();
    setProducts(productsData);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="container productsSection">
      <div className="productsTabs">
        <input type="radio" name="tab" id="tab1" />
        <label for="tab1" className="checkedTab">
          New Arrival
        </label>
        <input type="radio" name="tab" id="tab2" />
        <label for="tab2">Bestseller</label>
        <input type="radio" name="tab" id="tab3" />
        <label for="tab3">Featured Products</label>
      </div>
      <div className="products" style={{ marginTop: "32px" }}>
        {products.slice(0, 8).map((product) => (
          <ProductCard product={product} key={product.id} id={product.id} />
        ))}
      </div>
    </section>
  );
}
