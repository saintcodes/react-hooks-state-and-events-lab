import React, {useState} from "react";

function Item({ name, category }) {
  
  const [inCart, setinCart] = useState(false)

  const cartStatus = inCart ? "Remove From Cart" : "Add to Cart"
  const classStatus = inCart ? "in-cart" : "add"

  function handleClick() {
    setinCart(!inCart)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={classStatus} onClick={handleClick}>{cartStatus}</button>
    </li>
  );
}

export default Item;
