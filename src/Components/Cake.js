import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
export default function Cake() {
  const [cakeData, setCakeData] = useState([]);
  useEffect(() => {
    const fetchCakeData = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/random?query=cake&count=15&client_id=hRX0Nlohuglto-kRIrrzYeyCtxt1epsEjl6V54zXyB0"
        );
        const data = await response.json();
        setCakeData(data);
      } catch (error) {
        console.error("Error fetching cake data:", error);
      }
    };

    fetchCakeData();
  }, []);
  const getImageUrlWithSize = (imageUrl, width = 300, height = 200) => {
    const url = new URL(imageUrl);
    url.searchParams.set("w", width.toString());
    url.searchParams.set("h", height.toString());
    return url.toString();
  };
  return (
    <div>
      <h2>Cake Page</h2>
      <div className="product-container">
        {cakeData.map((cake, index) => (
          <ProductCard
            key={index}
            title={"Cake"}
            description="Delicious cake for any celebration."
            // imageUrl={cake.urls.regular}
            imageUrl={getImageUrlWithSize(cake.urls.regular)}
          />
        ))}
      </div>
    </div>
  );
}
