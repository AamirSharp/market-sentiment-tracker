import React from 'react';

export function Card({ children }) {
  return (
    <div className="border rounded shadow p-4 bg-white max-w-full">
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return (
    <div className="mb-2 font-bold text-xl">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
