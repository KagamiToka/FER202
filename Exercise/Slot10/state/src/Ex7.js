import { useState } from "react";

export function DragAndDropList() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragEnter = (index) => {
    if (index === draggingItem) return;
    const newItems = [...items];
    const item = newItems.splice(draggingItem, 1)[0];
    newItems.splice(index, 0, item);
    setDraggingItem(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragEnd={handleDragEnd}
          style={{ padding: "8px", border: "1px solid gray", margin: "4px" }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}