import React from "react";
import { HeroSection } from "./HeroSection";
import { NewProductsSection } from "./NewProductsSection";
import { BrowseCategorySection } from "./BrowseCategorySection";
import { ProductsSection } from "./ProductsSection";
import { PopularProductsSection } from "./PopularProductsSection";
import { DiscountProductsSection } from "./DiscountProductsSection";
import { SummerSaleSection } from "./SummerSaleSection";

export function Home() {
  return (
    <div>
      <HeroSection />
      <NewProductsSection />
      <BrowseCategorySection />
      <ProductsSection />
      <PopularProductsSection />
      <DiscountProductsSection />
      <SummerSaleSection />
    </div>
  );
}
