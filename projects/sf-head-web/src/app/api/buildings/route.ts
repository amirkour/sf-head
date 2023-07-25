import clientPromise from "@/lib/clientPromise";
import { NextResponse } from "next/server";
import { Building } from "@/lib/interfaces";

export async function POST(request: Request) {
  const input = await request.json();
  console.log(`got this request obj: ${JSON.stringify(input)}`);
  if (!input.name) {
    return NextResponse.json(
      { error: "No name!?  Come on bro ..." },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("sf-head");
  const buildingsCollection = db.collection<Building>("buildings");
  const result = await buildingsCollection.insertOne(input);

  const output = { insertedId: result.insertedId };
  console.log(`returning ${JSON.stringify(output)}`);
  return NextResponse.json(output);
}
export async function GET() {
  console.log(`i got here ...`);
  return NextResponse.json({ foo: "get worked!?" });
}
