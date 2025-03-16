"use client"
import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, fallbackSrc,alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={(e) => {
        setImgSrc(fallbackSrc);
        console.log("Image failed to load, using fallback", e);
      }}
    />
  );
};

export default ImageWithFallback;
