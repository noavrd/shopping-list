import React from "react";

function GroceryItem({name, add}) {
    return (
        <li>
        <button onClick={() => {add();}}>+</button>
        {name}
        </li>
    )
}

export default GroceryItem;