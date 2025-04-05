import { HiPlus } from "react-icons/hi";

export default function AccordionItem({
  title,
  content,
  curOpen,
  handleIsOpen,
  num,
}: {
  title: string;
  content: string;
  curOpen: number | null;
  handleIsOpen: (id: number) => void;
  num: number;
}) {
  const isOpen = curOpen === num;

  return (
    <div
      className="flex cursor-pointer flex-col gap-6 border-b border-b-gray-300"
      onClick={() => handleIsOpen(num)}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-black">{title}</h1>
        <button className="border-none p-2 text-pink-600 transition-all duration-200">
          <HiPlus className="h-10 w-10" />
        </button>
      </div>

      {isOpen ? (
        <div className="text-xl leading-8 text-gray-600">{content}</div>
      ) : (
        ""
      )}
    </div>
  );
}
