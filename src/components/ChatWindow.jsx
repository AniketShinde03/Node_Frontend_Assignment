import React from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export default function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <ChatMessage from="bot" text="I'm Fin, Example's AI powered bot." time="11m" />
        <ChatMessage from="user" text="Can I change my booking?" time="10m" />
        <ChatMessage from="bot" text="You can change the date of your stay..." time="10m" />
      </div>
      <ChatInput />
    </div>
  );
}