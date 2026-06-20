import { useEffect, useState } from "react";

// import { getGalleryImages } from "../api/galleryApi";

import { getGalleryImages } from "../api/api";
import { useParams } from "react-router-dom";

function WeddingGallery() {

  const [images, setImages] = useState([]);

  const { category } = useParams();

  const fetchImages = async () => {
    const res = await getGalleryImages(category);
    console.log(res,"response***")

    setImages(res.data);
  };

  useEffect(() => {

    fetchImages();
  }, []);

  return (
    <div className="flex gap-3 flex-wrap bg-black">
      {images.map((img) => (
        <img
          key={img.public_id}
          src={img.secure_url}
          alt=""
          className="h-[300px] w-[300px]"
        />
      ))}
    </div>
  );
}

export default WeddingGallery;