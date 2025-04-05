import { FaGithub } from "react-icons/fa";

export default function Navigation() {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-b-gray-200 px-12 py-4 text-black">
      <div className="flex gap-12">
        <div className="flex items-center gap-2">
          <FaGithub className="h-10 w-10" />
          <span className="text-2xl text-gray-200">/</span>
          <span className="text-3xl font-semibold">Resources</span>
        </div>
        <ul className="flex list-none items-center gap-8 text-lg font-medium">
          <li>Why GitHub</li>
          <li>Topics</li>
          <li>Learn</li>
          <li>Events & Webinars</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <button className="rounded-lg border-gray-200 px-4 py-3">Search</button>
        <button className="rounded-lg bg-black/80 px-4 py-3 text-white">
          Enterprise Trial
        </button>
        <button className="rounded-lg border border-gray-200 bg-white px-4 py-3">
          Contact Sales
        </button>
      </div>
    </div>
  );
}
