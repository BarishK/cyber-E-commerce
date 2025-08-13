import { ProductCard } from "../globalComponents/ProductCard";
import "./style/DiscountProductsSection.css";

export function DiscountProductsSection() {
  return (
    <section className="container discountProductsSection">
      <div className="discountProductsHeader">
        <h3>Discounts up to -50%</h3>
      </div>
      <div className="discountProductsCards">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
