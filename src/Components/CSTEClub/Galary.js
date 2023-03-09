import axios from "axios";
import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
const Galary = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://cste-club-ibrahimecste.vercel.app/api/img/add"
      );
      setPhotos(data?.imgList);
    };
    fetchData();
  }, []);
  return (
    <div className="my-5">
      <h1 className="my-4 text-3xl font-semibold text-center">Photo Galary</h1>
      <PhotoProvider>
        <div className="grid  grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.length > 0 &&
            photos.map((item, idx) => (
              <PhotoView key={idx} src={item.imgUrl}>
                <img
                  src={item.imgUrl}
                  className="img-fluid imgGalary"
                  style={{ height: "600", width: "800" }}
                  alt=""
                />
              </PhotoView>
            ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Galary;
