"use client";

import React, { useState } from "react";

const ImageGallery = ({
  images,
}: {
  images: {
    url: string;
  }[];
}) => {
  const [showAll, setShowAll] = useState(false);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="w-full h-96">
        <img
          src={images[0].url}
          alt="Single"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    );
  }

  const displayImages = showAll ? images : images.slice(0, 3);

  return (
    <div className="w-full">
      <div
        className={`grid gap-2 ${
          images.length === 2 ? "grid-cols-2" : "grid-cols-3"
        }`}
      >
        {displayImages.map((img, index) => (
          <div
            key={index}
            className={`relative ${
              images.length > 3 && index === 2 && !showAll
                ? "row-span-2 col-span-2"
                : ""
            }`}
          >
            <img
              src={img.url}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            {images.length > 3 && index === 2 && !showAll && (
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg cursor-pointer"
                onClick={() => setShowAll(true)}
              >
                <span className="text-white text-2xl font-bold">
                  +{images.length - 3} more
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      {showAll && (
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setShowAll(false)}
        >
          Show Less
        </button>
      )}
    </div>
  );
};

export default ImageGallery;
