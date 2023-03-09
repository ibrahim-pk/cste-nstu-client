import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CounterStat from "../CounterStat/CounterStat";
import slider3 from "../../../img/slider3.jpg";
import slider4 from "../../../img/slider4.jpg";

export default function CarouselHome() {
  return (
    <div className="w-full">
      <Carousel>
        <div>
          <img src={slider3} className="sliderImage" />
        </div>
        <div>
          <img src={slider4} className="sliderImage" />
        </div>
      </Carousel>
      <div className="mx-auto w-full text-center mt-[-90px] md:mt-[-135px] zIndexInc">
        <CounterStat />
      </div>
    </div>
  );
}
