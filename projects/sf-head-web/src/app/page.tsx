import clientPromise from "@/lib/clientPromise";
import { Item } from "@/lib/interfaces";
import { ItemList } from "@/lib/components";
import Link from "next/link";

async function getItems(): Promise<Item[]> {
  const client = await clientPromise;
  const db = client.db("sf-head");
  const items = db.collection<Item>("items");

  const cursor = items.find();
  const allItems = await cursor.toArray();
  return allItems;
}

export default async function Home() {
  const items = await getItems();

  return (
    <main className="p-4">
      <h1 className="text-center">SF HEAD</h1>
      <ItemList items={items} />
      <div className="mt-4">
        <button>
          <Link href="/items">Create a new item</Link>
        </button>
      </div>
    </main>
  );
}
