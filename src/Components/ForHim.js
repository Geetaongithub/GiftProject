import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ForHim = () => {
  const [forHimData, setForHimData] = useState([]);

  useEffect(() => {
    const fetchForHimData = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/random?query=men's-shoes,men's-watch,men's-wallet,men's-formalshirt,men's-perfume&count=15&client_id=hRX0Nlohuglto-kRIrrzYeyCtxt1epsEjl6V54zXyB0"
        );
        const data = await response.json();
        setForHimData(data);
      } catch (error) {
        console.error("Error fetching For Him data:", error);
      }
    };

    fetchForHimData();
  }, []);

  const getImageUrlWithSize = (imageUrl, width = 300, height = 200) => {
    const url = new URL(imageUrl);
    url.searchParams.set("w", width.toString());
    url.searchParams.set("h", height.toString());
    return url.toString();
  };

  return (
    <div>
      <h2>For Him Page</h2>
      <div className="product-container">
        {forHimData.map((item, index) => (
          <ProductCard
            key={index}
            title={"For Him Product "}
            description="Stylish product for him."
            imageUrl={getImageUrlWithSize(item.urls.regular)}
          />
        ))}
      </div>
    </div>
  );
};

export default ForHim;
