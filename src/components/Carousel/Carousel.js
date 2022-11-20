import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./CarouselItems";

function Example() {
  var items = [
    {
      heading: "Clecide Stain Remover",
      description:
        "Excellent product worth for value and product,tried new product and results are awesome.Go for it people try it.",
      customer: "Amazon Customer",
    },
    {
      heading: "Clecide Furniture Cleaner",
      description:
        "This works really great, it removes hard dust from the furniture just in seconds",
      customer: "Amazon Customer"
    },
    {
        heading: "Clecide Oven Kitchen Cleaner",
        description:
          "Good product. It removes dirt,greasy and oil stains effortlessly.It can be used chimneys and stoves",
        customer: "Flipkart Customer"
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} Items={item} />
      ))}
    </Carousel>
  );
}

export default Example;
