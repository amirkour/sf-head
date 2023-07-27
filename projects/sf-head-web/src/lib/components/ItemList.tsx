import { Item } from "../interfaces";

export default function ItemList({ items }: { items: Item[] }) {
  return (
    <>
      {items.length <= 0 ? (
        <div>No items</div>
      ) : (
        <>
          <div className="flex flex-row flex-nowrap justify-evenly items-start py-4">
            <div>ID</div>
            <div>NAME</div>
          </div>
          {items.map((item) => (
            <div
              key={item._id}
              className="flex flex-row flex-nowrap justify-evenly items-start py-4"
            >
              <div>{item._id}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
