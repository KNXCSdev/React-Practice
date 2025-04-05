import { useState } from "react";
import AccordionItem from "./AccordionItem";

const accordionData = [
  {
    title: "What is Github and how does it work?",
    content:
      "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
  },
  {
    title: "How do I see GitHub's availability?",
    content: "Check our real-time status report",
  },
  {
    title: "Why is GitHub so popular?",
    content:
      "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
  },
];

export default function Accordion() {
  const [curOpen, setCurOpen] = useState(null as number | null);

  const handleIsOpen = (id: number) => {
    setCurOpen((prev) => (prev === id ? -1 : id));
  };

  return (
    <div className="container mx-auto flex flex-col gap-4">
      {accordionData.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            curOpen={curOpen}
            handleIsOpen={handleIsOpen}
            num={index}
          />
        );
      })}
    </div>
  );
}
