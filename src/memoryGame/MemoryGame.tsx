import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MemoryGame = ({ initialImages }: { initialImages: string[] }) => {
  const [images] = useState(() =>
    shuffle(
      [...initialImages, ...initialImages].map((img) => ({
        id: uuidv4(),
        image: img,
      })),
    ),
  );
  const [guess, setGuess] = useState<{ id: string; image: string }[]>([]);
  const [guessedTiles, setGuessedTiles] = useState<string[]>([]);

  const handleGuess = (card: { id: string; image: string }) => {
    if (guess.find((g) => g.id === card.id) || guess.length === 2) return;
    setGuess((prev) => [...prev, card]);
  };

  useEffect(() => {
    if (guess.length === 2) {
      const [first, second] = guess;

      if (first.image === second.image) {
        setGuessedTiles((prev) => [...prev, first.id, second.id]);
        setGuess([]);
      } else {
        setTimeout(() => setGuess([]), 1000);
      }
    }
  }, [guess]);

  console.log(guessedTiles);

  const isFlipped = (id: string) =>
    guess.some((g) => g.id === id) || guessedTiles.includes(id);

  console.log(true);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="text-4xl">Memory Game</h1>

      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        {images.map((card) => (
          <div
            key={card.id}
            className={`${isFlipped(card.id) ? "cursor-auto" : "cursor-pointer"} rounded border shadow-md`}
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "#ccc",
              backgroundImage: isFlipped(card.id)
                ? `url(${card.image})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => (isFlipped(card.id) ? null : handleGuess(card))}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
