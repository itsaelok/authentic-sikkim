"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        height > 0 ? (scrollTop / height) * 100 : 0;

      setWidth(progress);
    };

    window.addEventListener("scroll", update);

    update();

    return () =>
      window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-transparent">

      <div
        className="h-full bg-red-600 transition-all duration-75"
        style={{ width: `${width}%` }}
      />

    </div>
  );
}