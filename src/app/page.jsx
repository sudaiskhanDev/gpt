"use client";
import { useState } from "react";
import TagInputForm from "@/components/TagInputForm";
import TagsOutput from "@/components/TagsOutput";

export default function Home() {
  const [tags, setTags] = useState("");

  return (
    <main className="min-h-screen flex flex-col items-center p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">🎯 GPT Tag Generator</h1>
      <TagInputForm onGenerate={setTags} />
      <TagsOutput tags={tags} />
    </main>
  );
}
