import { ShopNowBtn } from "../Buttons/ShopNowBtn";
import "./style/SummerSaleSection.css";

export function SummerSaleSection() {
  return (
    <section className="summerSaleSection">
      <div className="summerSaleSectionContent">
        <h2>
          Big Summer <b>Sale</b>
        </h2>
        <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <ShopNowBtn />
      </div>
    </section>
  );
}
