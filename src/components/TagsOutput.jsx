export default function TagsOutput({ tags }) {
  if (!tags) return null;

  // Split if GPT returns comma-separated tags
  const cleanTags = tags.split(/[,#\n]+/).map(t => t.trim()).filter(Boolean);

  return (
    <div className="mt-6 text-center">
      <h2 className="text-lg font-semibold mb-3">Generated Tags:</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {cleanTags.map((tag, i) => (
          <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
