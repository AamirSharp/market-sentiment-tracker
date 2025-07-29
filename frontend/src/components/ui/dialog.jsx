import React, { useState } from 'react';

export function Dialog({ triggerText = "Open", children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-blue-600 underline hover:text-blue-800"
      >
        {triggerText}
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg relative">
            {children}
            <button
              onClick={() => setOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none absolute top-3 right-3"
              aria-label="Close dialog"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
