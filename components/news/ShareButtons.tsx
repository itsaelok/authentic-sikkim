"use client";

export default function ShareButtons() {

  function share() {

    navigator.share?.({
      title: document.title,
      url: window.location.href,
    });

  }

  return (
    <button
      onClick={share}
      className="rounded-lg bg-blue-600 px-5 py-2 text-white"
    >
      Share News
    </button>
  );
}