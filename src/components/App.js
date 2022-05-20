import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [mode, setMode] = useState(false)
  const appClass = mode ? "App dark" : "App light"
  const modeName = mode ? "Light Mode" : "Dark Mode"

  function handleClick(e) {
    setMode(!mode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{modeName}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
