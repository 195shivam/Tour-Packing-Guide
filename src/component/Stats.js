export default function Stats({ item }) {
  if (!item.length)
    return (
      <footer className="stats">Start adding items for your trip🚀</footer>
    );
  const numItem = item.length;
  const numPacked = item.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItem) * 100) || 0;
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got all , ready to go✈️"
          : `You have ${numItem} item in your list , And you have already packed
        ${numPacked} ${percent}%`}
      </em>
    </footer>
  );
}
