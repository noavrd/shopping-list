import React from "react";

function BasketItem({name, amount, removeItem}) {
  return (
    <li>
      <button onClick={removeItem}>-</button>
      {`${amount} ${name}`}
    </li>
  )
}

export default BasketItem;
