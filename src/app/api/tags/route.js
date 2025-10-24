import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.KEY,
});

export async function POST(req) {
  try {
    const { text } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // or gpt-3.5-turbo
      messages: [
        {
          role: "system",
          content: "You are an artificial intelligence system specifically designed to analyze and interpret textual input in order to generate concise, contextually appropriate tags. Your primary function is to read and understand any given piece of text—whether it's a sentence, paragraph, or longer passage—and produce a set of short, meaningful tags that accurately reflect the core themes, topics, or keywords present in the content. These tags should be relevant to the subject matter, help categorize the text effectively, and be suitable for use in indexing, search optimization, or content organization. Your tagging should be precise, avoiding redundancy or overly generic terms, and should aim to capture the essence of the input in just a few words.",
        },
        {
          role: "user",
          content: `Generate 100 short, relevant tags for this: "${text}"`,
        },
      ],
    });

    const tags = response.choices[0].message.content;
    return new Response(JSON.stringify({ tags }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to generate tags" }), { status: 500 });
  }
}
