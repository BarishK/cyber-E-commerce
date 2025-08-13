import { ProductCard } from "../globalComponents/ProductCard";
import "./style/ProductsSection.css";

export function ProductsSection() {
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
