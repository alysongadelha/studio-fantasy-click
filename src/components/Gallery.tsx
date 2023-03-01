import type { Photo } from "@/models/Photo";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { useRef } from "react";
import { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

type GalleryProps = {
  photos: Photo[];
};

export const Gallery = ({ photos }: GalleryProps): JSX.Element => {
  const lighBoxRef = useRef<LightGallery | null>(null);

  return (
    <>
      <Masonry breakpointCols={2} className="flex gap-4" columnClassName="">
        {photos.map((photo, index) => (
          <div className="relative" key={`div-image-${index}-${photo.src}`}>
            <Image
              key={`image-${index}-${photo.src}`}
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt={photo.alt}
              className="relative my-4"
              placeholder="blur"
              blurDataURL={photo.blurDataURL}
            />
            <div
              className="absolute w-full h-full inset-0 bg-transparent hover:bg-stone-900 hover:bg-opacity-10 cursor-pointer"
              onClick={() => lighBoxRef.current?.openGallery(index)}
            ></div>
          </div>
        ))}
      </Masonry>
      <LightGalleryComponent
        onInit={(ref) => {
          if (ref) {
            lighBoxRef.current = ref.instance;
          }
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        dynamic
        dynamicEl={photos.map((photo) => ({
          src: photo.src,
          thumb: photo.src,
        }))}
      />
    </>
  );
};
