import React from "react";

export default function ChatInput() {
  return (
    <div className="p-4 border-t flex items-center bg-white">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 border rounded px-4 py-2"
      />
      <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded">Send</button>
    </div>
  );
}