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
          content: "You are an AI that generates short, relevant tags for any given input text.",
        },
        {
          role: "user",
          content: `Generate 5 short, relevant tags for this: "${text}"`,
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
