import './App.css';
import Basket from './Basket';
import Groceries from  "./Groceries"
const groceries = [
  {id: 1, name:"Strawberry"},
  {id: 2, name:"Blueberry"},
  {id: 3, name:"Orange"}, 
  {id: 4, name:"Banana"}, 
  {id: 5, name:"Apple"}, 
  {id: 6, name:"Carrot"},
  {id: 7, name:"Celery"},
  {id: 8, name:"Mushroom"}, 
  {id: 9, name:"Green Pepper"},
  {id: 10, name:"Eggs"},
  {id: 11, name:"Cheese"},
  {id: 12, name:"Butter"}, 
  {id: 13, name:"Chicken"},
  {id: 14, name:"Beef"},
  {id: 15, name:"Pork"},
  {id: 16, name:"Fish"}, 
  {id: 17, name:"Rice"}, 
  {id: 18, name:"Pasta"}, 
  {id: 19, name:"Bread"}]

function App() {
  return(
    <div className="groceriesList">
      { groceries.map((item, i) => (
        <Groceries
        key={`item-${i}`}
        name={item.name}
        id={item.id}
        />
      ))} <br/>
        { groceries.map((item, i) => (
          <Basket
          key={`item-${i}`}
          name={item.name}
          id={item.id}
          />
        ))}
    </div>
  )
}

export default App;
