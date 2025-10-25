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
          content: "You are an expert blog strategist and SEO content writer. "
            + "Your task is to generate a comprehensive, well-structured blog outline "
            + "for the topic: The outline must be detailed, logical, and "
            + "optimized for both readability and SEO. Begin with a compelling introduction "
            + "that hooks the reader and highlights the importance of the topic. Then, "
            + "create numbered main sections (1, 2, 3, etc.) with descriptive titles, "
            + "and under each section, include sub-points (a, b, c, etc.) or bullet points "
            + "that expand on the key ideas. Ensure SEO considerations (keywords, FAQs, "
            + "long-tail opportunities) are included. Add real-world examples wherever "
            + "relevant. Conclude with a powerful summary + call to action. "
            + "The outline should be detailed enough for a 1500+ word blog post, "
            + "and every heading must be meaningful. Deliver only the blog outline in easy words.",
        },
        {
          role: "user",
          content: `Generate 10000 words, relevant Article for this: "${text}"`,
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
