import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function PersonalizedGift() {
  const [giftData, setGiftData] = useState([]);

  useEffect(() => {
    const fetchGiftData = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/random?query=personalized-gift&count=15&client_id=hRX0Nlohuglto-kRIrrzYeyCtxt1epsEjl6V54zXyB0"
        );
        const data = await response.json();
        setGiftData(data);
      } catch (error) {
        console.error("Error fetching personalized gift data:", error);
      }
    };

    fetchGiftData();
  }, []);

  const getImageUrlWithSize = (imageUrl, width = 300, height = 200) => {
    const url = new URL(imageUrl);
    url.searchParams.set("w", width.toString());
    url.searchParams.set("h", height.toString());
    return url.toString();
  };

  return (
    <div>
      <h2>Personalized Gift Page</h2>
      <div className="product-container">
        {giftData.map((gift, index) => (
          <ProductCard
            key={index}
            title={"Personalized Gift"}
            description="Thoughtful and unique gifts for your loved ones."
            imageUrl={getImageUrlWithSize(gift.urls.regular)}
          />
        ))}
      </div>
    </div>
  );
}
