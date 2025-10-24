import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function TagsOutput({ tags }) {
  if (!tags) return null;

  const articleContent = tags;

  return (
    <div className="mt-6 text-left p-4 bg-gray-50 rounded-lg shadow-inner">
      <h2 className="text-xl font-bold text-indigo-700 mb-4">Generated Article:</h2>
      <div className="prose max-w-none prose-indigo">
        <ReactMarkdown>{articleContent}</ReactMarkdown>
      </div>
    </div>
  );
}
