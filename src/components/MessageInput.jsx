import { useState } from "react";

function MessageInput({ onSend, disabled }) {
  const [message, setMessage] = useState("");

  const send = () => {
    if (!message.trim()) return;
    onSend(message.trim());
    setMessage("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        disabled={disabled}
        className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && send()}
      />
      <button
        disabled={disabled}
        className={`px-4 py-2 rounded-lg text-white ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
        onClick={send}
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
