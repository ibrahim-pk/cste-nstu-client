import React from "react";
import CarouselHome from "./Carousel/CarouselHome";
import CSTEClubHome from "./CSTEClubHome/CSTEClubHome";
import MessageFromChairman from "./MessageFromChairman/MessageFromChairman";
import NewsHome from "./News/News";
import NoticeHome from "./Notice/NoticeHome";
import { AnimationOnScroll } from "react-animation-on-scroll";
import JobPost from "./Job/JobPost";
import Faq from "./Faq/Faq";

export default function Home() {
  return (
    <div>
      <CarouselHome />
      <AnimationOnScroll animateIn="animate__bounceIn">
        <MessageFromChairman />
      </AnimationOnScroll>

      <div className="flex flex-col md:flex-row gap-4 max-w-screen-xl p-4 mx-auto w-full my-20">
        <div className="w-full flex-1">
          <NewsHome />
        </div>
        <div className="w-full flex-1">
          <NoticeHome />
        </div>
      </div>
      <CSTEClubHome />
      <JobPost />
      <Faq />
    </div>
  );
}
