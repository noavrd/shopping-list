import React, {useState} from "react";
import BasketItem from "./BasketItem";

function Basket({items, removeItem, removeAll}) {
    const groceriesBasket = Object.entries(items);
    return(
        <ul>
            <h3>Basket</h3>
            <button onClick={removeAll}><i className="fa fa-trash" aria-hidden="true"></i>delete</button>
            {groceriesBasket.map(([name, amount], i) => (
                <BasketItem
                key={i}
                name={name}
                amount={amount}
                removeItem={() => removeItem(name)}
                />
            ))}
        </ul>
    )
}
        
    
export default Basket;

