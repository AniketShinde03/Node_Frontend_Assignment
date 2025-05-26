import React from "react";

export default function InboxList() {
  return (
    <div className="w-1/5 bg-gray-50 border-r p-4 hidden md:block">
      <div className="text-sm font-medium mb-2">Your Inbox</div>
      <ul className="space-y-2">
        <li className="bg-blue-100 p-2 rounded">Luis Easton</li>
        <li className="p-2">Eric - Whitewings</li>
        <li className="p-2">Carlos - Clippers Co</li>
      </ul>
    </div>
  );
}