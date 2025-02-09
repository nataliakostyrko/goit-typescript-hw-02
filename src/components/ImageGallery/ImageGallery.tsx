import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

type ImageData = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
};

type Props = {
  images: ImageData[];
  OpenModal: (url: string) => void;
};

const ImageGallery = ({ images, OpenModal }:Props) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => {
        return (
          <li key={image.id} className={css.imagesItem} >
                <ImageCard
                    imageData={image}
                    OpenModal={OpenModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;