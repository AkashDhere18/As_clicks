import { useEffect, useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// import { getGalleryImages } from "../api/galleryApi";

import { getGalleryImages } from "../api/api";
import { useParams } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

function WeddingGallery() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false)
  // const [displayCategory, setDisplayCategory] = useState("")

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

  const { category } = useParams();

  const fetchImages = async () => {

    setLoading(true);
    try {

      const res = await getGalleryImages(category);
      // console.log(res, "response***")

      setImages(res.data);
      // setDisplayCategory(selectedcategory)
    }
    finally {
      setLoading(false)
    }
  };

  useEffect(() => {

    fetchImages();
  }, []);

  return (
    // <div className="flex gap-3 flex-wrap bg-black">
    //   {images.map((img) => (
    //     <img
    //       key={img.public_id}
    //       src={img.secure_url}
    //       alt=""
    //       className="h-[300px] w-[300px]"
    //     />
    //   ))}
    // </div>
    <>
      <PageWrapper>
        <div className='px-6 sm:px-12 lg:px-20 pb-16 pt-32'>
          <h1 className='text-center font-heading text-4xl md:text-5xl lg:text-6xl mb-24' style={{
            background: 'linear-gradient(180deg, #f0c97a 0%, #C8A96B 50%, #9d7a3a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>{category}</h1>
          {loading ? (
            <p className="text-center text-white">Loading...</p>
          ) : (
            <div className='columns-2 sm:columns-3 lg:columns-5 gap-6 space-y-6'>
              {images.map((img, i) => (
                <div key={i} className='overflow-hidden rounded-lg shadow-md break-inside-avoid'>
                  <img
                    src={img.secure_url}
                    alt=''
                    loading="lazy"
                    className='w-full h-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer'
                    onClick={
                      () => {
                        setIndex(i);
                        setOpen(true);
                      }
                    }
                  />
                </div>
              ))}

            </div>
          )}
        </div>
        <Lightbox
          plugins={[Zoom]}
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map((img) => ({
            src: img.secure_url,
          }))}
        />
      </PageWrapper>
    </>
  );
}

export default WeddingGallery;