import css from "./ImageCard.module.css";

type ImageData = {
  urls: {
    small: string;
    regular: string;
  };
  description: string;
};

type Props = {
  imageData: ImageData;
  OpenModal: (url: string) => void;
};

const ImageCard = ({ imageData, OpenModal }: Props) => {
  return (
    <div className={css.imageCard}>
      <img
        src={imageData.urls.small}
        alt={imageData.description}
        onClick={() => {
          OpenModal(imageData.urls.regular);
        }}
      />
    </div>
  );
};

export default ImageCard;