import { Item } from "../interfaces";
export default function ItemList({ items }: { items: Item[] }) {
  return (
    <>
      {items.length <= 0 && <div>No items</div>}
      {items.length > 0 && <div>Items found ...</div>}
    </>
  );
}
