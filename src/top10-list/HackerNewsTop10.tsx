import { useEffect, useState } from "react";

const HackerNewsTop10 = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNews() {
      const data = await fetch("https://hacker-news.firebaseio.com/v0/");
    }

    getNews();
  });

  return (
    <div className="flex flex-col gap-2">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default HackerNewsTop10;
