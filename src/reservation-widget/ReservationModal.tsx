import { useState } from "react";
import SelectableButton from "./SelectableButton";

interface ReservationModalProps {
  isModalOpen: boolean;
  onOpenModal: () => void;
}

export default function ReservationModal({
  isModalOpen,
  onOpenModal,
}: ReservationModalProps) {
  const [people, setPeople] = useState<number>(1);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [openModal, setOpenModal] = useState<"people" | "time" | null>(null);

  function handleModal(modalName: "people" | "time") {
    setOpenModal(openModal === modalName ? null : modalName);
  }

  function handleClickPeople(value: number | string) {
    setPeople(Number(value));
    handleModal("people");
  }

  function handleClickTime(value: number | string) {
    setTime(`${value}:00`);
    handleModal("time");
  }

  return (
    <div
      className={`fixed top-0 left-0 z-30 h-screen w-full bg-white/10 backdrop-blur-xs transition`}
      onClick={onOpenModal}
    >
      <div
        className={`absolute top-1/2 left-1/2 z-50 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 ${
          isModalOpen ? "opacity-100" : "opacity-0"
        } transition-all`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full w-full rounded-lg bg-white p-4 shadow-sm">
          <div className="flex flex-col justify-between rounded-t border-b border-gray-200 p-4 md:p-5">
            <h3 className="mb-2 text-4xl font-semibold text-gray-900">
              Book a table
            </h3>
            <p className="text-2xl text-gray-500">
              This is where you’ll add the details of your booking
            </p>
          </div>

          <div className="p-4 md:p-5">
            <form className="space-y-10">
              {/* People */}
              <div>
                <label
                  htmlFor="people"
                  className="mb-2 block text-2xl font-medium text-gray-900"
                >
                  People
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="people"
                    id="people"
                    readOnly
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-3xl text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    required
                    value={people}
                    onClick={() => handleModal("people")}
                  />
                  {openModal === "people" && (
                    <div className="absolute top-20 z-50 grid w-full grid-cols-5 gap-8 rounded-lg bg-gray-300 p-10 shadow-2xl">
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectableButton
                          key={i + 1}
                          value={i + 1}
                          onSelect={handleClickPeople}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-3xl font-medium text-gray-900"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-3xl text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              {/* Time */}
              <div>
                <label
                  htmlFor="time"
                  className="mb-2 block text-3xl font-medium text-gray-900"
                >
                  Time
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="time"
                    id="time"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-3xl text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    required
                    value={time}
                    onClick={() => handleModal("time")}
                    readOnly
                  />
                  {openModal === "time" && (
                    <div className="absolute top-20 grid w-full grid-cols-5 gap-8 rounded-lg bg-gray-300 p-10 shadow-2xl">
                      {Array.from({ length: 10 }, (_, i) => {
                        const hour = i + 8;
                        const label = `${hour}:00`;
                        return (
                          <SelectableButton
                            key={hour}
                            value={hour.toString()}
                            label={label}
                            onSelect={handleClickTime}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-6 text-center text-3xl font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
              >
                Login to your account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
