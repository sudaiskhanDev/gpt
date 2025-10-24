export default function TagsOutput({ tags }) {
  if (!tags) return null;

  // Assuming 'tags' now contains the article content directly
  const articleContent = tags;

  return (
    <div className="mt-6 text-left p-4 bg-gray-50 rounded-lg shadow-inner">
      <h2 className="text-xl font-bold text-indigo-700 mb-4">Generated Article:</h2>
      <div className="prose max-w-none">
        {/* Render the article content.
            We'll split by newlines to create paragraphs for better readability.
            A more robust solution might involve a markdown renderer if the AI output is markdown.
        */}
        {articleContent.split('\n').map((paragraph, index) => (
          paragraph.trim() !== '' && (
            <p key={index} className="mb-3 text-gray-800 leading-relaxed">{paragraph}</p>
          )
        ))}
      </div>
    </div>
  );
}
