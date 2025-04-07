import { useState } from "react";
import ContactItem from "./ContactItem";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [contacts, setContacts] = useState([
    { id: "1", name: "Alice Johnson", city: "New York" },
    { id: "2", name: "Bob Smith", city: "Los Angeles" },
    { id: "3", name: "Charlie Brown", city: "Chicago" },
    { id: "4", name: "David Williams", city: "Houston" },
    { id: "5", name: "Emma Davis", city: "Phoenix" },
    { id: "6", name: "Frank Miller", city: "Philadelphia" },
    { id: "7", name: "Grace Wilson", city: "San Antonio" },
    { id: "8", name: "Henry Moore", city: "San Diego" },
    { id: "9", name: "Isabella Garcia", city: "Dallas" },
    { id: "10", name: "Jack Martinez", city: "San Jose" },
  ]);

  const [isBeingEditedId, setIsBeingEditedId] = useState<string | null>(null);

  function handleDelete(id: string) {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name && city) {
      setContacts((prev) => [
        { id: Math.random().toString(), name, city: city },
        ...prev,
      ]);
      setName("");
      setCity("");
    }
  }

  function handleEdit(id: string, updated: { name: string; city: string }) {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === id ? { ...contact, ...updated } : contact,
      ),
    );
    setIsBeingEditedId(null);
  }

  return (
    <div className="flex flex-col py-10">
      <h1 className="text-3xl">Contact Book</h1>
      <p className="mb-10 text-xl">Keep track of where your friends live</p>
      <form
        className="mb-10 flex w-3/5 items-center gap-4 rounded-lg bg-white p-10"
        onSubmit={handleSubmit}
      >
        <div className="itemx flex w-full">
          <span className="rounded-e-0 flex items-center rounded-s-md border border-e-0 border-gray-300 bg-gray-200 px-3 text-xl text-gray-900">
            Name:
          </span>
          <input
            type="text"
            id="website-admin"
            className="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="flex w-full">
          <span className="rounded-e-0 flex items-center rounded-s-md border border-e-0 border-gray-300 bg-gray-200 px-3 text-xl text-gray-900">
            City:
          </span>
          <input
            type="text"
            id="website-admin"
            className="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-2xl text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <button className="h-full w-2/4 rounded-md bg-blue-700 py-3 text-2xl text-white">
          Add Contact
        </button>
      </form>

      <div className="flex w-full flex-wrap gap-10">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            city={contact.city}
            id={contact.id}
            onDelete={handleDelete}
            isBeingEditedId={isBeingEditedId}
            setIsBeingEditedId={setIsBeingEditedId}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
