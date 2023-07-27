import clientPromise from "@/lib/clientPromise";
import { Item, InputOutput } from "@/lib/interfaces";
import Link from "next/link";

async function getBulidings(): Promise<Item[]> {
  const client = await clientPromise;
  const db = client.db("sf-head");
  const items = db.collection<Item>("items");

  const cursor = items.find();
  return cursor.toArray();
}

export default async function Home() {
  const items = await getBulidings();
  console.log(`Existing items: ${JSON.stringify(items)}`);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hi world</h1>
      {items && items.length > 0 && <div>Existing items ...</div>}
      {!items || (items.length <= 0 && <div>NO EXISTING ITEMS</div>)}
      <Link href="/items">Create a new item</Link>
    </main>
  );
}
