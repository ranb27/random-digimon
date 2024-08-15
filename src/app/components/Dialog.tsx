"use client";

import { useState, useEffect } from "react";
import Table from "@/app/components/Table";

interface Digimon {
  name: string;
  img: string;
  level: string;
}

export default function Dialog({ value }: Readonly<{ value: Digimon[] }>) {
  const [filteredDigimon, setFilteredDigimon] = useState<Digimon[]>(value);

  useEffect(() => {
    const searchDigimon = document.getElementById(
      "digimon_list"
    ) as HTMLDialogElement;
    const handleClose = () => {
      searchDigimon.close();
    };
    searchDigimon.addEventListener("close", handleClose);

    return () => {
      searchDigimon.removeEventListener("close", handleClose);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = value.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setFilteredDigimon(filtered);
  };

  return (
    <>
      <button
        className="btn absolute top-12 right-2 glass text-[#f59e0b] text-base font-bold"
        onClick={() => {
          const modal = document.getElementById(
            "digimon_list"
          ) as HTMLDialogElement;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        Digimon List
      </button>
      <dialog id="digimon_list" className="modal">
        <div className="modal-box max-w-xl">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-[#f59e0b]">Digimon</h3>
            <input
              type="text"
              placeholder="Search..."
              className="input w-1/2 input-sm text-end"
              onChange={handleSearch}
            />
          </div>
          <div className="divider divider-warning">List</div>
          <Table value={filteredDigimon} />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
