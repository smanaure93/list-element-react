import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([] as string[]);
  const [item, setItem] = useState("");
  const handleChange = (event: any) => {
    setItem(event.target.value);
  };
  const handleAddItem = () => {
    const listBck = [...list];
    listBck.push(item);
    setItem("");
    setList(listBck);
  };

  const handleDeleteItem = (index: number) => {
    const listBck = [...list];
    listBck.splice(index, 1);
    setList(listBck);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          To add an item press <b>Add</b>. You can delete items by clicking on
          them.
        </p>
        <div>
          <input
            type="text"
            placeholder="Type a new item..."
            value={item}
            onChange={handleChange}
          />
          <button onClick={handleAddItem}>Add</button>
        </div>
        {list.length > 0 && (
          <div>
            <p>Item List:</p>
            {list.map((element, index) => {
              return (
                <p className="list-item" onClick={() => handleDeleteItem(index)}>
                  {element}
                </p>
              );
            })}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
