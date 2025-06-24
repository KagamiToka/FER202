import React, { useReducer, useState } from "react";
import { Button, Form, ListGroup, InputGroup } from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter(item => item.id !== action.id) };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map(item => item.id === action.id ? { ...item, name: action.name } : item)
      };
    case "SORT_ALPHA":
      return { ...state, items: [...state.items].sort((a, b) => a.name.localeCompare(b.name)) };
    case "SORT_TIME":
      return { ...state, items: [...state.items].sort((a, b) => a.id - b.id) };
    default:
      return state;
  }
}

export default function ItemListAdvanced() {
  const [state, dispatch] = useReducer(listReducer, { items: [] });
  const [newItemName, setNewItemName] = useState("");
  const [filter, setFilter] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const handleAdd = () => {
    if (!newItemName.trim()) return;
    dispatch({ type: "ADD_ITEM", item: { id: Date.now(), name: newItemName } });
    setNewItemName("");
  };

  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditingValue(name);
  };

  const handleSaveEdit = (id) => {
    dispatch({ type: "EDIT_ITEM", id, name: editingValue });
    setEditingId(null);
    setEditingValue("");
  };

  const filteredItems = state.items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Search..." value={filter} onChange={e => setFilter(e.target.value)} />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control value={newItemName} onChange={e => setNewItemName(e.target.value)} placeholder="Enter item" />
        <Button onClick={handleAdd}>Add</Button>
      </InputGroup>

      <div className="mb-2">
        <Button onClick={() => dispatch({ type: "SORT_ALPHA" })}>Sort A-Z</Button>{' '}
        <Button onClick={() => dispatch({ type: "SORT_TIME" })}>Sort by Time</Button>
      </div>

      <ListGroup>
        {filteredItems.map(item => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            {editingId === item.id ? (
              <InputGroup>
                <Form.Control
                  value={editingValue}
                  onChange={(e) => setEditingValue(e.target.value)}
                />
                <Button variant="success" onClick={() => handleSaveEdit(item.id)}>Save</Button>
              </InputGroup>
            ) : (
              <>
                <span>{item.name}</span>
                <div>
                  <Button variant="outline-primary" className="me-2" onClick={() => handleEdit(item.id, item.name)}>
                    Edit
                  </Button>
                  <Button variant="outline-danger" onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}>
                    Remove
                  </Button>
                </div>
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
