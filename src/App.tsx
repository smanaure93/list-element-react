import React, { FormEvent, useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([] as string[]);
  const [item, setItem] = useState("");

  const handleChange = (event: any) => {
    setItem(event.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAddItem();
  };

  const handleAddItem = () => {
    const listBck = [...list];
    listBck.push(item);
    setList(listBck);
    setItem("");
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
          To add an item, write it down and press <b>Add</b>.{" "}
          {list.length > 0 && (
            <span>You can delete items by clicking on them.</span>
          )}
        </p>
      </header>
      <div className="App-content">
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type a new item..."
              value={item}
              onChange={handleChange}
            />
            <button>Add</button>
          </form>
        </div>
        {list.length > 0 && (
          <div>
            <p>ITEM LIST</p>
            {list.map((element, index) => {
              return (
                <p
                  className="list-item"
                  key={index}
                  onClick={() => handleDeleteItem(index)}
                >
                  {index + 1}.- {element}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
