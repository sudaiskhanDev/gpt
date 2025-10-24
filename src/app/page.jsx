"use client";
import { useState } from "react";
import TagInputForm from "@/components/TagInputForm";
import TagsOutput from "@/components/TagsOutput";

export default function Home() {
  const [tags, setTags] = useState("");

  // Function to handle the generation of tags
  const handleGenerateTags = (generatedTags) => {
    setTags(generatedTags);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 font-sans">
      <div className="bg-white shadow-2xl rounded-xl p-10 max-w-4xl w-full space-y-8 transform transition-all duration-500 hover:scale-[1.01]">
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight leading-tight">
          🎯 <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">SUDAIS</span>
        </h1>
        <p className="text-center text-lg text-gray-600 mb-10">
          Effortlessly generate relevant tags for your content using the power of AI.
        </p>
        <TagInputForm onGenerate={handleGenerateTags} />
        <TagsOutput tags={tags} />
      </div>
    </main>
  );
}
