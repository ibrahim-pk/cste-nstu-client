import React from "react";

const AboutClub = () => {
  return (
    <div>
      <div className="m-full mx-auto my-10 px-4 max-w-screen-xl ">
        <div className="flex flex-col md:flex-row bg-base-100 shadow-xl border">
          <figure className="p-2 csteClubImg">
            <img
              src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/302437402_779773696757763_1874941255832335242_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFL8T0PuJtU33XriUNk-ZmZ0OAafmGQGijQ4Bp-YZAaKF_7XfWLrgqynMn5G3VxX-6DogCqtWJWWqrOGpxqzUrA&_nc_ohc=-uy2KwGDakcAX8tEs5U&_nc_ht=scontent.fdac24-4.fna&oh=00_AfB_AK4T0M1EWmttBxL_D_gEe7V_nmnh2QZrnm3W-OGbMA&oe=6391692B"
              alt="Album"
              className="img-fluid border p-2"
            />
          </figure>
          <div className="card-body flex-1">
            <h2 className="card-title text-2xl">CSTE Club!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              accusantium officia, eum assumenda qui quod nostrum repudiandae
              quia consectetur doloribus molestiae sit deleniti debitis hic
              ipsam itaque. Inventore, deleniti ad.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam accusantium officia, eum
              assumenda qui quod nostrum repudiandae quia consectetur doloribus
              molestiae sit deleniti debitis hic ipsam itaque. Inventore,
              deleniti ad. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam accusantium officia, eum assumenda qui quod nostrum
              repudiandae quia consectetur doloribus molestiae sit deleniti
              debitis hic ipsam itaque.
            </p>

            <div className="card-actions justify-end">
              <a
                href="https://www.facebook.com/CSTEClub"
                className="btn btn-outline btn-sm hover:bg-blue-900"
              >
                Join us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutClub;
