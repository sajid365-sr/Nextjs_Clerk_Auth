"use client";

import React, { useRef, useState } from "react";
import img1 from "../../images/image-1.webp";
import img2 from "../../images/image-2.webp";
import img3 from "../../images/image-3.webp";
import img4 from "../../images/image-4.webp";
import img5 from "../../images/image-5.webp";
import img6 from "../../images/image-6.webp";
import img7 from "../../images/image-7.webp";
import img8 from "../../images/image-8.webp";
import img9 from "../../images/image-9.webp";
import img10 from "../../images/image-10.jpeg";
import img11 from "../../images/image-11.jpeg";
import Image from "next/image";

// const images = [
//   img1,
//   img2,
//   img3,
//   img4,
//   img5,
//   img6,
//   img7,
//   img8,
//   img9,
//   img10,
//   img11,
// ];

const Gallery = () => {
  const [images, setImages] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ]);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(position);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(position);
  };

  const drop = (e) => {
    const copyImages = [...images];
    const dragItemContent = copyImages[dragItem.current];
    copyImages.splice(dragItem.current, 1);
    copyImages.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;

    setImages(copyImages);
  };

  return (
    <div>
      <h1 className="text-4xl mb-10 text-teal-400">Gallery</h1>
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, index) => (
          <div
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
            className="relative z-0 dragImage"
          >
            <Image src={img} alt="gallery" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
