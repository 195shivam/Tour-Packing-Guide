import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItm = [];

function App() {
  const [item, setItem] = useState([]);
  function addItem(task) {
    setItem([...item, task]);
  }
  function handleDelete(id) {
    setItem((item) => item.filter((item) => item.id !== id));
  }
  function handlePacked(id) {
    setItem((item) =>
      item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirn = window.confirm(
      "Are you sure , You want to delete the items"
    );
    if (confirn) setItem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackingList
        item={item}
        onDelete={handleDelete}
        onPacked={handlePacked}
        onClearList={handleClearList}
      />
      <Stats item={item} />
    </div>
  );
}

export default App;
