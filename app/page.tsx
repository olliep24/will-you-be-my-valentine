"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [noPosition, setNoPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleMouseEnter = () => {
    const buttonWidth = 128;
    const buttonHeight = 48;
    const x = Math.random() * (window.innerWidth - buttonWidth);
    const y = Math.random() * (window.innerHeight - buttonHeight);
    setNoPosition({ x, y });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-white font-sans">
      <img
        src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWhnMnZxMWhwNWJiOXU2ZmszdGF6dnBvYzYwcXk2ZXZ5OXV6ZHcwMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mkybJoR87BNulYTtVa/giphy.gif"
        alt="Valentine gif"
        className="w-48 h-48 rounded-lg object-cover"
      />
      <h1 className="text-4xl font-bold text-black">
        Will you be my Valentine?
      </h1>
      <div className="flex gap-4">
        <Link
          href="/yes"
          className="rounded-lg bg-pink-500 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-pink-600"
        >
          Yes
        </Link>
        <button
          onMouseEnter={handleMouseEnter}
          className="rounded-lg bg-zinc-300 px-6 py-3 text-lg font-semibold text-zinc-800"
          style={
            noPosition
              ? {
                  position: "fixed",
                  left: noPosition.x,
                  top: noPosition.y,
                }
              : undefined
          }
        >
          No
        </button>
      </div>
    </div>
  );
}
