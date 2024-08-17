"use client";

import Image from "next/image";
import React, { useState } from "react";

const ImageGallery = ({
  images,
}: {
  images: {
    url: string;
  }[];
}) => {
  if (images.length === 0) return null;

  return (
    <>
      {images.length === 2 ? (
        <Image
          src={images[0].url}
          height={270}
          width={480}
          className="w-full rounded-xl h-[268px] object-cover"
          alt="image"
        />
      ) : (
        images.length === 3 && (
          <div className="grid grid-cols-2 gap-3">
            <Image
              src={images[0].url}
              height={270}
              width={480}
              className="w-full rounded-xl h-[268px] object-cover"
              alt="image"
            />
            <div className="grid gap-3 grid-rows-2">
              <Image
                src={images[1].url}
                height={270}
                width={480}
                className="w-full rounded-xl h-[128px] object-cover"
                alt="image"
              />
              <Image
                src={images[2].url}
                height={270}
                width={480}
                className="w-full rounded-xl h-[128px] object-cover"
                alt="image"
              />
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ImageGallery;
