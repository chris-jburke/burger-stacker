import React, {useState} from 'react';
import './App.css';
import Food from './Food'
import Ingredients from './Ingredients'
import Burger from './Burger'

export default function App() {
  const [burgerlist, setBurgerList] = useState([])
  const [ingredients, setIngredients] = useState([
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}])

  const addIngredient = (e, newFood, newColor) => {
    e.preventDefault();
    let newFoodObj = {name: newFood, color: newColor}
    setIngredients([...ingredients, newFoodObj])
  }
  const addBurgerLayer = (e, newLayer) => {
    e.preventDefault();
    setBurgerList([...burgerlist, newLayer])
  }
  const clearBurger = () => {
    setBurgerList([])
  }
  return (
    <div className="wrapper">
      <div className="col-1">
        <Ingredients ingredients={ingredients} addLayer={addBurgerLayer} />
        <Food addIngredient={addIngredient} clear={clearBurger} />
      </div>
      <div className="col-2">
        <Burger burger={burgerlist}/>
        <button className="clear-button" onClick={clearBurger}>Clear Burger</button>
      </div>
    </div>
  )

}

