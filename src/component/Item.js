export default function Item({ itm, onDelete, onPacked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itm.packed}
        onClick={() => onPacked(itm.id)}
      />
      <span style={itm.packed ? { textDecoration: "line-Through" } : {}}>
        {itm.quantity} {itm.desc}
      </span>
      <button onClick={() => onDelete(itm.id)}>❌</button>
    </li>
  );
}
