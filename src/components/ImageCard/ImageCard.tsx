import React from "react";
import s from "./ImageCard.module.css";

interface Image {
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

interface ImageCardProps {
  image: Image;
  onClick: (imageUrl: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div>
      <img
        className={s.card}
        onClick={() => onClick(image.urls.regular)}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
