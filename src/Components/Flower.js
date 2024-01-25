import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Flower = () => {
  const [flowerData, setFlowerData] = useState([]);

  useEffect(() => {
    const fetchFlowerData = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/random?query=flowers&count=15&client_id=hRX0Nlohuglto-kRIrrzYeyCtxt1epsEjl6V54zXyB0"
        );
        const data = await response.json();
        setFlowerData(data);
      } catch (error) {
        console.error("Error fetching flower data:", error);
      }
    };

    fetchFlowerData();
  }, []);

  const getImageUrlWithSize = (imageUrl, width = 300, height = 200) => {
    const url = new URL(imageUrl);
    url.searchParams.set("w", width.toString());
    url.searchParams.set("h", height.toString());
    return url.toString();
  };

  return (
    <div>
      <h2>Flower Page</h2>
      <div className="product-container">
        {flowerData.map((flower, index) => (
          <ProductCard
            key={index}
            title={"Flower Product"}
            description="Beautiful flower for any occasion."
            imageUrl={getImageUrlWithSize(flower.urls.regular)}
          />
        ))}
      </div>
    </div>
  );
};

export default Flower;
