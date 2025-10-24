"use client";
import { useState } from "react";
import TagInputForm from "@/components/TagInputForm";
import TagsOutput from "@/components/TagsOutput";

export default function Home() {
  const [tags, setTags] = useState("");

  const handleGenerateTags = (generatedTags) => {
    setTags(generatedTags);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 text-gray-800 font-sans relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <div className="relative z-10 bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-10 max-w-4xl w-full space-y-10 transition-all duration-500 hover:scale-[1.01]">
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 tracking-tight leading-tight drop-shadow-sm">
          🎯 <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Blog Generator</span>
        </h1>
        <p className="text-center text-lg text-gray-600 max-w-xl mx-auto">
          Effortlessly generate relevant tags for your content using the power of AI.
        </p>
        <div className="animate-fade-in">
          <TagInputForm onGenerate={handleGenerateTags} />
        </div>
        <div className="animate-fade-in delay-200">
          <TagsOutput tags={tags} />
        </div>
      </div>
    </main>
  );
}