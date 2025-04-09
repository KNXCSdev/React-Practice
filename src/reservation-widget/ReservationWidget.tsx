import { useState } from "react";
import ReservationModal from "./ReservationModal";

export default function ReservationWidget() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleOpenModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <button
        type="button"
        className="rounded-lg bg-blue-700 px-6 py-4 text-center text-5xl font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
        onClick={handleOpenModal}
      >
        Book a table
      </button>
      {isModalOpen && (
        <ReservationModal
          isModalOpen={isModalOpen}
          onOpenModal={handleOpenModal}
        />
      )}
    </div>
  );
}
