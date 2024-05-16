import { openai } from "@ai-sdk/openai";
import { StreamingTextResponse, streamText } from "ai";

export default async function POST(req: Request) {
  const { messages } = await req.body;

  const result = await streamText({
    model: openai("gpt-4-turbo"),
    messages,
  });

  return new StreamingTextResponse(result.toAIStream());
}
