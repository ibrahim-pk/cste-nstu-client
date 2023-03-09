import React from "react";
import styles from "../../CSTEClub/CSTEClub.module.css";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
export default function CSTEClubHome() {
  return (
    <div className="mx-auto m-full max-w-screen-xl my-4 px-5">
      <h2 className="text-2xl font-semibold my-5">CSTE CLUB</h2>

      <div className="hero m-2 my-5 lg:p-10 md:p-10 card shadow-xl border items-center">
        <div className="hero-content text-left flex-col-reverse lg:flex-row justify-between w-full px-10">
          <div className="flex-1 mx-3 w-full">
            <h3 className="text-3xl mb-5">Our Mission</h3>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
              <ul
                className={`font-semibold text-2xl steps steps-vertical ${styles.steps}`}
              >
                <li className={`step  ${styles.step}`}>
                  Competative Programming (CP)
                </li>
                <li className={`step  ${styles.step}`}>Web Development</li>
                <li className={`step  ${styles.step}`}>Apps Development</li>
                <li className={`step  ${styles.step}`}>Cyber Sec urite</li>
              </ul>
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll
            className="csteClubImg"
            animateIn="animate__fadeInRightBig"
          >
            <img
              src="http://res.cloudinary.com/ditdynru4/image/upload/v1670796727/WinnerImg/lw6fnhfu4wdtggrd2fmf.jpg"
              className=" rounded-lg shadow-xl"
            />
          </AnimationOnScroll>
        </div>
      </div>
      <div className="card-actions justify-end">
        <Link
          to="/csteclub"
          className="btn btn-outline btn-sm hover:bg-blue-900"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
}
