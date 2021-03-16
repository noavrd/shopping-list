import './App.css';
import Groceries from  "./Groceries";
import { useState, useEffect } from 'react';
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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };



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
      delete counter[name];
    } else {
      --counter[name];
    }
    setCounter(Object.assign({}, counter));
  }

  function removeAll() {
    setCounter({});
  }

    //search
    useEffect(() => {
      const results = groceries.filter((grocery) =>
        grocery.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    }, [searchTerm]);
  
  

  return(
  
    <div className="groceriesList">
        <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <Groceries groceries={searchResults} addItem={addItem}/>
      <Basket items={counter} removeItem={removeItem} removeAll={removeAll} />
    </div>
  )
}

export default App;
