import React from "react";

export default function Card({ image, onClickFunc, keyType, value }) {
  return (
    <div
      data-signage-type={value}
      onClick={(e) => onClickFunc(keyType, value)}
      className=" rounded-2xl overflow-hidden hover:bg-white cursor-pointer min-h-52 min-w-60 max-w-60 flex flex-col items-center justify-center flex-1 transform transition duration-500 ease-in-out shadow-xl hover:-translate-y-1 "
    >
      <div className="w-full h-52 overflow-hidden">
        <img src={image} className="hover:scale-110 transition duration-1000 w-full h-full inline-block object-cover object-center" />
      </div>
      <h3 className="text-xl font-semibold uppercase py-4">{value}</h3>
    </div>
  );
}
