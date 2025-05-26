import React from "react";

export default function ChatMessage({ from, text, time }) {
  const isBot = from === "bot";
  return (
    <div className={`max-w-lg ${isBot ? "ml-auto" : ""}`}>
      <div
        className={`p-3 rounded-lg ${isBot ? "bg-blue-100" : "bg-gray-100"}`}
      >
        {text}
      </div>
      <div className="text-xs text-gray-500 text-right">Seen · {time}</div>
    </div>
  );
}