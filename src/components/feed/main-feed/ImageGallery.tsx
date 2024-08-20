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
  if (images?.length === 0) {
    return null;
  } else if (images?.length === 1) {
    return (
      <Image
        src={images[0].url}
        height={270}
        width={480}
        className="w-full rounded-xl h-[268px] object-cover"
        alt="image"
      />
    );
  } else if (images?.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-3">
        <Image
          src={images[0].url}
          height={270}
          width={480}
          className="w-full rounded-xl h-[268px] object-cover"
          alt="image"
        />
        <Image
          src={images[1].url}
          height={270}
          width={480}
          className="w-full rounded-xl h-[268px] object-cover"
          alt="image"
        />
      </div>
    );
  } else if (images?.length === 3) {
    return (
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
    );
  } else {
    return (
      <div className="flex flex-wrap gap-3">
        {images?.map((img, i) => (
          <Image
            key={i}
            src={img.url}
            height={120}
            width={120}
            className="rounded-xl size-28 object-cover"
            alt="image"
          />
        ))}
      </div>
    );
  }
};

export default ImageGallery;
