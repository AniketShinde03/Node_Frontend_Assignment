import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import InboxList from "./components/InboxList";
import ChatWindow from "./components/ChatWindow";
import DetailsPanel from "./components/DetailsPanel";
import Modal from "./components/Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row h-screen overflow-hidden bg-gray-100">
      <Sidebar onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex flex-1 flex-col sm:flex-row overflow-auto">
        <InboxList />
        <ChatWindow />
        <DetailsPanel />
      </main>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}