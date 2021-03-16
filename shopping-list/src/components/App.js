import './App.css';
import Groceries from  "./Groceries";
import { useState } from 'react';
import Basket from './Basket';

const groceries = [
  "Strawberry",
  "Blueberry",
  "Orange",
  "Banana",
  "Apple",
  "Carrot",
  "Celery",
  "Mushroom",
  "Green Pepper",
  "Eggs",
  "Cheese",
  "Butter",
  "Chicken",
  "Beef",
  "Pork",
  "Fish",
  "Rice",
  "Pasta",
  "Bread",
];
function App() {

  const [counter, setCounter] = useState({});

  //add counter to customer list
  function addItem(name) {
    if(!counter[name]) {
      counter[name] = 1;
    } else {
      ++counter[name];
    }
    setCounter(Object.assign({}, counter));
  }

  function removeItem(name) {
    if(counter[name] === 1) {
      delete counter[name]
    } else {
      --counter[name];
    }
    setCounter(Object.assign({}, counter));
  }

  function removeAll() {
    setCounter({});
  }


  return(
    <div className="groceriesList">
        <Groceries groceries={groceries} addItem={addItem}/>
        <Basket groceries={counter} removeItem={removeItem} removeAll={removeAll} />
    </div>
  )
}

export default App;
