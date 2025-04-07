import { useState, useEffect } from "react";

export default function ContactItem({
  name,
  city,
  id,
  onDelete,
  isBeingEditedId,
  setIsBeingEditedId,
  onEdit,
}: {
  name: string;
  city: string;
  id: string;
  onDelete: (id: string) => void;
  isBeingEditedId: string | null;
  setIsBeingEditedId: (id: string | null) => void;
  onEdit: (id: string, updated: { name: string; city: string }) => void;
}) {
  const [editedName, setEditedName] = useState(name);
  const [editedCity, setEditedCity] = useState(city);

  useEffect(() => {
    if (isBeingEditedId === id) {
      setEditedName(name);
      setEditedCity(city);
    }
  }, [isBeingEditedId, name, city, id]);

  return (
    <div className="flex h-84 w-[31.9%] flex-col rounded-lg bg-white p-10">
      {isBeingEditedId === id ? (
        <>
          <div className="itemx mb-5 flex w-full">
            <span className="rounded-e-0 flex w-1/7 items-center rounded-s-md border border-e-0 border-gray-300 bg-gray-200 px-3 text-xl text-gray-900">
              Name:
            </span>
            <input
              type="text"
              className="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Name"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          </div>
          <div className="itemx flex w-full">
            <span className="rounded-e-0 flex w-1/7 items-center rounded-s-md border border-e-0 border-gray-300 bg-gray-200 px-3 text-xl text-gray-900">
              City:
            </span>
            <input
              type="text"
              className="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="City"
              value={editedCity}
              onChange={(e) => setEditedCity(e.target.value)}
            />
          </div>
          <div className="mt-auto flex items-center justify-between">
            <button
              className="h-full w-1/4 rounded-md bg-pink-500 py-3 text-2xl text-white"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
            <div className="flex w-2/4 items-center">
              <button
                className="h-full w-2/4 rounded-md bg-gray-300 py-3 text-2xl text-black"
                onClick={() => setIsBeingEditedId(null)}
              >
                Cancel
              </button>
              <button
                className="h-full w-2/4 rounded-md bg-blue-700 py-3 text-2xl text-white"
                onClick={() => {
                  onEdit(id, { name: editedName, city: editedCity });
                }}
              >
                Save
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="mb-2 text-3xl">{name}</h2>
          <p className="text-2xl">{city}</p>
          <button
            className="mt-auto ml-auto w-48 rounded-md bg-blue-700 py-3 text-2xl text-white"
            onClick={() => setIsBeingEditedId(id)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}
