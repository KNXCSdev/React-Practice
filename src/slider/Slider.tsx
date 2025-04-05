import { useEffect, useState } from "react";

function Slider() {
  const [curPage, setCurPage] = useState(0);

  const data = ["vite.svg", "vite.svg", "vite.svg"];

  const handleIncrement = () => {
    setCurPage((curPage) => (curPage < data.length - 1 ? curPage + 1 : 0));
  };

  const handleDecrement = () => {
    setCurPage((curPage) => (curPage > 0 ? curPage - 1 : data.length - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleIncrement();
    }, 2000);

    console.log(interval);

    return () => clearInterval(interval);
  });

  return (
    <div className="relative h-48 w-48 border">
      <div className="flex h-full w-full">
        {data.map((obj, i) => (
          <img
            src={obj}
            key={i}
            alt=""
            className="absolute left-0 h-48 w-48 transition"
            style={{ transform: `translateX(${100 * (i - curPage)}%)` }}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 -left-12"
        onClick={() => handleDecrement()}
      >
        LEFT
      </button>
      <button
        className="absolute top-1/2 -right-12"
        onClick={() => handleIncrement()}
      >
        Right
      </button>
      \
      <div className="absolute -bottom-2 left-1/3 flex gap-2">
        {data.map((_, index) => (
          <span
            key={index}
            className={`rounded-full p-2 ${index === curPage ? "bg-red-600" : "bg-white"}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
