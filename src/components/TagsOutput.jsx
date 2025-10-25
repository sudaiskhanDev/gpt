import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function TagsOutput({ tags }) {
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 0.5; // milliseconds per character

  useEffect(() => {
    if (!tags) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + tags.charAt(index));
      index++;
      if (index >= tags.length) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [tags]);

  if (!tags) return null;

  return (
    <div className="mt-6 text-left p-4 text=white bg-gray-700 text-white border rounded-lg shadow-inner">
      <h2 className="text-xl font-bold text-indigo-300 mb-4">Generated Detail Article:</h2>
      <div className="prose max-w-none prose-indigo">
        <ReactMarkdown>{displayedText}</ReactMarkdown>
      </div>
    </div>
  );
}