import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ForHer = () => {
  const [forHerData, setForHerData] = useState([]);

  useEffect(() => {
    const fetchForHerData = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/random?query=women's-shoes,women's-watch,women's-handbag,women's-perfume,women's-clothes,women's-lipstikes&count=15&client_id=hRX0Nlohuglto-kRIrrzYeyCtxt1epsEjl6V54zXyB0"
        );
        const data = await response.json();
        setForHerData(data);
      } catch (error) {
        console.error("Error fetching For Her data:", error);
      }
    };

    fetchForHerData();
  }, []);

  const getImageUrlWithSize = (imageUrl, width = 300, height = 200) => {
    const url = new URL(imageUrl);
    url.searchParams.set("w", width.toString());
    url.searchParams.set("h", height.toString());
    return url.toString();
  };

  return (
    <div>
      <h2>For Her Page</h2>
      <div className="product-container">
        {forHerData.map((item, index) => (
          <ProductCard
            key={index}
            title={"For Her Product"}
            description="Elegant product for her."
            imageUrl={getImageUrlWithSize(item.urls.regular)}
          />
        ))}
      </div>
    </div>
  );
};

export default ForHer;
