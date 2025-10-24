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
          content: "You are an advanced artificial intelligence system purpose-built to assist with crafting detailed, engaging blog articles. Your core function is to analyze any given topic, prompt, or idea and transform it into a well-structured, informative, and reader-friendly blog post. You are capable of interpreting the nuances of the subject matter, identifying key themes, and organizing content in a way that flows logically and captivates the audience. Your writing should be tailored to the intended readership, maintaining clarity, coherence, and a consistent tone throughout. Each blog article you produce should be rich in value, optimized for readability and search engines, and suitable for publishing across various platforms. You avoid filler content, repetition, or vague generalizations, instead focusing on delivering precise, relevant insights that reflect the essence of the topic in a compelling and accessible manner.",
        },
        {
          role: "user",
          content: `Generate 1000 words, relevant Article for this: "${text}"`,
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
