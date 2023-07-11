import openai from "@/openAi";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();
  console.log(todos);

  // communicate with openAi GPT
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      n: 1,
      stream: false,
      messages: [
        {
          role: "system",
          content:
            "When responding, welcome the uder always as  Mr.Remi and say welcome to the Trello Todo App!, Limit the response to 200 characters",
        },

        {
          role: "user",
          content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To Do, in progress, and done, then tell the user to have a productive day! Here is the data: ${JSON.stringify(
            todos
          )} `,
        },
      ],
    });

    const { data } = response;
    console.log(`data is ${data}`);
    console.log(data.choices[0].message);

    return NextResponse.json(data.choices[0].message);
  } catch (error) {
    throw new Error();
  }
}
