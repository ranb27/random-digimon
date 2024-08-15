"use client";

import { useState, useEffect } from "react";
import Table from "@/app/components/Table";

interface Digimon {
  id: number; // Assuming you've added an 'id' field to each Digimon object
  name: string;
  img: string;
  level: string;
}

export default function Dialog({ value }: Readonly<{ value: Digimon[] }>) {
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
          <h3 className="font-bold text-lg text-[#f59e0b]">Digimon</h3>

          <div className="divider divider-warning">List</div>
          <Table value={value} />
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
