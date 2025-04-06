import axios from "axios";
import { useEffect, useState } from "react";

function MovieSearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=tt3896198&apikey=526c6f6&s=${finalValue}`)
      .then(function (response) {
        // handle success

        setMovies(response.data.Search);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [finalValue]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-semibold">Movie Search Page</h1>
        <div className="flex gap-4">
          <input
            type="text"
            className="border px-6 py-2 text-black"
            placeholder="Search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="bg-gray-500 px-6 py-2 text-2xl"
            onClick={() => setFinalValue(searchValue)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5">
        {movies?.map((movie) => (
          <div
            key={movie.imdbID}
            className="flex flex-col items-center justify-center gap-4 rounded border shadow-md"
          >
            <h2 className="p-2 text-3xl font-semibold">{movie?.Title}</h2>

            <img
              src={movie.Poster}
              alt={movie.Title}
              className="h-[300px] w-[200px] rounded p-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearchPage;
