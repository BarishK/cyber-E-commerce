import { useEffect, useState } from "react";
import { getProductById } from "../../api/productById";
import "./Product.css";
import { AddToWishlist } from "../Buttons/AddToWishlist";
import { AddToCard } from "../Buttons/AddToCard";
import { useProductId } from "../../context/productId";
// icons
import { CiDeliveryTruck } from "react-icons/ci";
import { TbBuildingStore } from "react-icons/tb";
import { SiAdguard } from "react-icons/si";

export function Product() {
  const { productId } = useProductId();
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const productData = await getProductById(productId);
    setProduct(productData);
  };

  useEffect(() => getProduct(), []);

  return (
    <div className="productPage container">
      <div className="product">
        <div className="productImage">
          <img src={product?.image} />
        </div>
        <div className="productContent">
          <h2>{product?.title}</h2>
          <p className="productPrice">${product?.price}</p>
          <div className="productSizeBoxes">
            <div className="sizeBox">S</div>
            <div className="sizeBox">M</div>
            <div className="sizeBox">L</div>
            <div className="sizeBox sizeBoxSelected">XL</div>
          </div>
          <div className="productDesc">
            <p>{product?.description}</p>
          </div>
          <div className="productBtnArea">
            <AddToWishlist />
            <AddToCard />
          </div>
          <div className="productInfo">
            <div className="productDelivery">
              <div className="productInfoIcon">
                <CiDeliveryTruck />
              </div>
              <div>
                <span>Free Delivery</span> <br />
                <span>1-2 Days</span>
              </div>
            </div>
            <div className="productInStock">
              <div className="productInfoIcon">
                <TbBuildingStore />
              </div>
              <div>
                <span>In Stock</span>
                <br />
                <span>Today</span>
              </div>
            </div>
            <div className="productGuaranteed">
              <div className="productInfoIcon">
                <SiAdguard />
              </div>
              <div>
                <span>Guaranteed</span>
                <br />
                <span>1 Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
