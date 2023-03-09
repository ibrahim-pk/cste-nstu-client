import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default class ResearchHome extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    return (
      <div className="mx-auto max-w-screen-xl my-6 p-4 overflow-hidden pb-20">
        <h2 className="text-2xl font-semibold my-5"> LATEST RESEARCHES</h2>
        <Slider {...settings}>
          <div>
            <div className="card card-compact mx-2  bg-base-100 border">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Mahcine learnning </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, libero.
                </p>
                <p className="my-2">
                  <FontAwesomeIcon icon={faUserTie} className="mr-2" />
                  Teacher Name
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to="/researchview"
                    className=" btn bg-blue-900 btn-sm text-white hover:bg-blue-800"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact mx-2  bg-base-100 border">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Mahcine learnning </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, libero.
                </p>
                <p className="my-2">
                  <FontAwesomeIcon icon={faUserTie} className="mr-2" />
                  Teacher Name
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to="/researchview"
                    className=" btn bg-blue-900 btn-sm text-white hover:bg-blue-800"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact mx-2  bg-base-100 border">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Mahcine learnning </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, libero.
                </p>
                <p className="my-2">
                  <FontAwesomeIcon icon={faUserTie} className="mr-2" />
                  Teacher Name
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to="/researchview"
                    className=" btn bg-blue-900 btn-sm text-white hover:bg-blue-800"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact mx-2  bg-base-100 border">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Mahcine learnning </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, libero.
                </p>
                <p className="my-2">
                  <FontAwesomeIcon icon={faUserTie} className="mr-2" />
                  Teacher Name
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to="/researchview"
                    className=" btn bg-blue-900 btn-sm text-white hover:bg-blue-800"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card card-compact mx-2  bg-base-100 border">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Mahcine learnning </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, libero.
                </p>
                <p className="my-2">
                  <FontAwesomeIcon icon={faUserTie} className="mr-2" />
                  Teacher Name
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to="/researchview"
                    className=" btn bg-blue-900 btn-sm text-white hover:bg-blue-800"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="mx-auto text-center w-full my-5 overflow-hidden">
          <Link
            to="/researches"
            className="btn btn-outline float-right   hover:bg-blue-900 btn-sm"
          >
            See All
          </Link>
        </div>
      </div>
    );
  }
}
