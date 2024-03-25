import React from "react";

interface ShowImageProps {
  prev: string;
  imageUrl: string;
  setPrev: (prev: string) => void;
  name: string;
}

const ShowImage: React.FC<ShowImageProps> = ({
  prev,
  imageUrl,
  setPrev,
  name,
}) => {
  return (
    <span
      onMouseEnter={() => {
        setPrev(name);
      }}
      onMouseLeave={() => {
        setPrev("");
      }}
    >
      {name}
      <img style={{ opacity: prev == name ? 1 : 0 }} src={imageUrl} />
    </span>
  );
};

export default ShowImage;
