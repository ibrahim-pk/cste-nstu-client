import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
export default function Researches() {
  return (
    <div className="mx-auto max-w-screen-xl	 w-full px-4 mt-16 mb-4">
      <h2 className="text-3xl mb-12 text-center">Researches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="my-2">
              <FontAwesomeIcon icon={faUserTie} className="mr-2" />
              Teacher Name
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eligendi assumenda maiores earum optio. Quod in atque nemo dolores
              placeat dolor quis..
            </p>

            <Link
              to="/researchview"
              className="btn btn-outline btn-sm hover:bg-blue-900 mt-2"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="my-2">
              <FontAwesomeIcon icon={faUserTie} className="mr-2" />
              Teacher Name
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eligendi assumenda maiores earum optio. Quod in atque nemo dolores
              placeat dolor quis..
            </p>

            <Link
              to="/researchview"
              className="btn btn-outline btn-sm hover:bg-blue-900 mt-2"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="my-2">
              <FontAwesomeIcon icon={faUserTie} className="mr-2" />
              Teacher Name
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eligendi assumenda maiores earum optio. Quod in atque nemo dolores
              placeat dolor quis..
            </p>

            <Link
              to="/researchview"
              className="btn btn-outline btn-sm hover:bg-blue-900 mt-2"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="my-2">
              <FontAwesomeIcon icon={faUserTie} className="mr-2" />
              Teacher Name
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eligendi assumenda maiores earum optio. Quod in atque nemo dolores
              placeat dolor quis..
            </p>

            <Link
              to="/researchview"
              className="btn btn-outline btn-sm hover:bg-blue-900 mt-2"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="my-2">
              <FontAwesomeIcon icon={faUserTie} className="mr-2" />
              Teacher Name
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eligendi assumenda maiores earum optio. Quod in atque nemo dolores
              placeat dolor quis..
            </p>

            <Link
              to="/researchview"
              className="btn btn-outline btn-sm hover:bg-blue-900 mt-2"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="my-2">
              <FontAwesomeIcon icon={faUserTie} className="mr-2" />
              Teacher Name
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eligendi assumenda maiores earum optio. Quod in atque nemo dolores
              placeat dolor quis..
            </p>

            <Link
              to="/researchview"
              className="btn btn-outline btn-sm hover:bg-blue-900 mt-2"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="btn-group grid grid-cols-2 w-80 mt-5 float-right">
          <button className="btn btn-outline btn-xs">Previous page</button>
          <button className="btn btn-outline btn-xs">Next</button>
        </div>
      </div>
    </div>
  );
}
