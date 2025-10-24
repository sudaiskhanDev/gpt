"use client";
import { useState } from "react";

export default function TagInputForm({ onGenerate }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    const res = await fetch("/api/tags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });

    const data = await res.json();
    onGenerate(data.tags);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <textarea
        className="border border-gray-400 p-3 rounded-lg"
        rows={3}
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700"
      >
        {loading ? "Generating..." : "Generate Tags"}
      </button>
    </form>
  );
}
