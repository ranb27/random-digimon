import React from "react";
import Image from "next/image";

interface Digimon {
  name: string;
  img: string;
  level: string;
}

export default function Table({ value }: Readonly<{ value: Digimon[] }>) {
  return (
    <>
      <div className="overflow-x-auto h-96">
        <table className="table">
          {/* head */}
          <thead className="">
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {value.map((item, index) => (
              <tr key={index}>
                <td className="text-primary font-bold">{item.name}</td>
                <td>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={150}
                    height={150}
                  />
                </td>
                <td>{item.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
