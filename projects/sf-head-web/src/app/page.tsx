import clientPromise from "@/lib/clientPromise";
import { Building, InputOutput } from "@/lib/interfaces";
import Link from "next/link";

async function getBulidings(): Promise<Building[]> {
  const client = await clientPromise;
  const db = client.db("sf-head");
  const buildingsCollection = db.collection<Building>("buildings");

  const cursor = buildingsCollection.find();
  return cursor.toArray();
}

export default async function Home() {
  const buildings = await getBulidings();
  console.log(`Existing buildings: ${JSON.stringify(buildings)}`);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hi world</h1>
      {buildings && buildings.length > 0 && <div>Existing buildings ...</div>}
      {!buildings ||
        (buildings.length <= 0 && <div>NO EXISTING BUILDINGS</div>)}
      <Link href="/buildings">Create a building</Link>
    </main>
  );
}
