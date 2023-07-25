import Image from "next/image";
import clientPromise from "@/lib/clientPromise";


async function getData() {
  const client = await clientPromise;
  console.log(`client connected!?`);
  const db = client.db("sf-head");
  const buildingsCollection = db.collection("builds");
  const cursor = buildingsCollection.find();
  return cursor.toArray();
}

export default async function Home() {
  const data = await getData();
  console.log(`Got this data: ${JSON.stringify(data)}`);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hi world</h1>
    </main>
  );
}
