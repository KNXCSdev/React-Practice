import { useEffect, useState } from "react";

const Typewriter = () => {
  const [text, setText] = useState<string | null>(null);
  const [displayedText, setDisplayedText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const inputData = data.get("sentence") as string;
    setText(inputData);
    setDisplayedText("");
  };

  useEffect(() => {
    if (!text) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="sentence"
          placeholder="Type a sentence"
          style={{ width: "300px" }}
        />
        <button type="submit">Display with typewriter effect</button>
      </form>
      <div className="mt-10">
        {displayedText && (
          <p className="text-4xl text-red-800">You wrote {displayedText}</p>
        )}
      </div>
    </div>
  );
};

export default Typewriter;
