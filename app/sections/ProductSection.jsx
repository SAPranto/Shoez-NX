import React from "react";
import ProductCard from "../components/ProductCard";
import TitleBlock from "../components/TitleBlock";

const ProductSection = () => {
  return (
    <section className="section">
      <div className="container">
        <TitleBlock
          heading="Our Latest Products"
          paragraph="View The Latest Products of ShoeZ"
        ></TitleBlock>
        <ProductCard></ProductCard>
      </div>
    </section>
  );
};

export default ProductSection;
