"use client";
import { Item } from "../interfaces";

export default function ItemList({ items }: { items: Item[] }) {
  const onDelete = (_id: number) => {
    console.log(`DELETING ${_id}`);
  };
  return (
    <>
      {items.length <= 0 ? (
        <div>No items</div>
      ) : (
        <>
          <div className="flex flex-row flex-nowrap justify-evenly items-start py-4">
            <div>ID</div>
            <div>NAME</div>
            <div>ACTIONS</div>
          </div>
          {items.map((item) => (
            <div
              key={item._id}
              className="flex flex-row flex-nowrap justify-evenly items-start py-4"
            >
              <div>{item._id}</div>
              <div>{item.name}</div>
              <div>
                <button
                  className="text-white p-2 bg-red-500 hover:bg-red-800"
                  onClick={() => onDelete(item._id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
