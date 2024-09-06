import { useState } from "react";
import Item from "./Item";

export default function PackingList({ item, onDelete, onPacked, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItem;
  if (sortBy === "input") sortedItem = item;
  if (sortBy === "desc")
    sortedItem = item.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  if (sortBy === "packed")
    sortedItem = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItem.map((itm) => (
          <Item
            itm={itm}
            onDelete={onDelete}
            onPacked={onPacked}
            key={itm.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="packed">Sort by Packed Status</option>
          <option value="desc">Sort by Description</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
