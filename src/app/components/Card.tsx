import React from "react";
import Image from "next/image";

interface Digimon {
  name: string;
  img: string;
  level: string;
}

export default function Card({ value }: Readonly<{ value: Digimon }>) {
  return (
    <>
      <div className="grid grid-cols-1 xl:flex justify-between gap-4">
        <Image
          src={value.img}
          alt={value.name}
          width={512}
          height={512}
          className="mask mask-squircle shadow-lg p-4 hover:scale-105 duration-200"
        />

        <div className="my-auto text-center xl:text-start">
          <h2 className="text-4xl xl:text-9xl font-bold text-amber-600">
            {value.name}
          </h2>
          <p className="text-xl xl:text-5xl">
            Level: <span className="font-bold">{value.level}</span>
          </p>
        </div>
      </div>
    </>
  );
}
