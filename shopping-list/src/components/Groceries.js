import React, {Component} from "react";
import GroceryItem from "./GroceryItem"



function Groceries({groceries, addItem}) {
    return(
        <ul>
            <h3>Groceries</h3>
            {groceries.map((name, i) => (
                <GroceryItem
                key={i}
                name={name}
                add={() => addItem(name)}
                />
            ))}
            
        </ul>
    )
}

export default Groceries;