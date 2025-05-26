import React from "react";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">Features</h2>
        <p className="mb-4">Some interactive features could go here!</p>
        <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded">Close</button>
      </div>
    </div>
  );
}