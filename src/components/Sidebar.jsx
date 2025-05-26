import { useState } from "react";
import Modal from "./Modal"; 

export default function Sidebar({ onOpenModal }) {
  const [selectedFilter, setSelectedFilter] = useState("Your Inbox");

  const filters = ["Your Inbox", "Mentions", "All", "Unassigned", "Dashboard"];
  const teams = ["Refunds", "Returns", "Bugs"];
  const teammates = ["Nuno Silva", "Maria Cardenas"];
  const views = ["High touch"];

  return (
    <aside className="w-64 bg-white h-full p-4 flex flex-col gap-6 border-r">
      <div>
        <h2 className="font-bold text-lg mb-2">Inbox</h2>
        {filters.map((filter) => (
          <div
            key={filter}
            className={`cursor-pointer px-2 py-1 rounded ${
              selectedFilter === filter ? "bg-gray-300" : "hover:bg-gray-200"
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </div>
        ))}
      </div>
      <div>
        <h2 className="font-bold text-sm mb-1 text-gray-500">TEAMS</h2>
        {teams.map((team) => (
          <div key={team} className="text-sm text-gray-700 hover:underline cursor-pointer">
            {team}
          </div>
        ))}
      </div>
      <div>
        <h2 className="font-bold text-sm mb-1 text-gray-500">TEAMMATES</h2>
        {teammates.map((mate) => (
          <div key={mate} className="text-sm text-gray-700 hover:underline cursor-pointer">
            {mate}
          </div>
        ))}
      </div>
      <div>
        <h2 className="font-bold text-sm mb-1 text-gray-500">VIEWS</h2>
        {views.map((view) => (
          <div key={view} className="text-sm text-gray-700 hover:underline cursor-pointer">
            {view}
          </div>
        ))}
      </div>
      <button
        onClick={onOpenModal}
        className="mt-auto py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Features
      </button>
    </aside>
  );
}
