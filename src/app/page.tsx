"use client";

import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

//! Components
import Card from "@/app/components/Card";
import Dialog from "@/app/components/Dialog";

interface Digimon {
  name: string;
  img: string;
  level: string;
}

// Use correct type for digimon state
export default function Home() {
  //! State
  const [loading, setLoading] = useState<boolean>(true);
  const [digimon, setDigimon] = useState<Digimon[]>([]);
  const [randomDigimon, setRandomDigimon] = useState<Digimon | null>(null);

  //! Fetch
  useEffect(() => {
    setLoading(true);

    axios
      .get("https://digimon-api.vercel.app/api/digimon")
      .then((res) => setDigimon(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  //! Function
  const randomDigimonHandler = async () => {
    try {
      const random = Math.floor(Math.random() * digimon.length);
      setRandomDigimon(digimon[random]);
    } catch (error) {
      console.error("An error occurred:", error);
      // Optionally, set an error state here if you want to display an error message
    }
  };

  return (
    <div className="grid grid-cols-1 gap-2">
      <button
        onClick={randomDigimonHandler}
        className="btn text-neutral border-none bg-[#f59e0b] absolute top-12 left-2"
      >
        Random here!
      </button>

      {loading ? (
        <div className="flex justify-center h-full my-56">
          <span className="loading loading-spinner text-warning loading-lg"></span>
        </div>
      ) : randomDigimon ? (
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://images6.alphacoders.com/701/701869.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-75 bg-base-300"></div>
          <Card value={randomDigimon} />
        </div>
      ) : (
        <>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://images6.alphacoders.com/701/701869.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-75 bg-base-300"></div>
            <h1 className="text-error flex justify-center items-center my-auto h-screen">
              Waiting for random
            </h1>
          </div>
        </>
      )}

      <Dialog value={digimon} />
    </div>
  );
}
