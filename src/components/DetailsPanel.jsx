import React from "react";

export default function DetailsPanel() {
  return (
    <div className="w-1/4 bg-gray-50 border-l p-4 hidden md:block">
      <h3 className="font-bold">Details</h3>
      <div className="mt-2 space-y-2">
        <div><strong>Assignee:</strong> June Jensen</div>
        <div><strong>Team:</strong> FastTrack</div>
        <div><strong>Priority:</strong> High</div>
        <div><strong>Device:</strong> iPhone</div>
      </div>
    </div>
  );
}