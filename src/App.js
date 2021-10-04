import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from './components/Main';
import Cart from './components/Cart';
import data from "./data";
import { useState } from "react";

function App() {
	const { products } = data;
	const [cartItems, setCartItems] = useState([]);
	// handle function addToCart
	function onAddToCart(product) {
		const exist = cartItems.find((item) => item.id === product.id)
	if(exist) {
		setCartItems(cartItems.map((item) =>
		item.id === product.id ? {...exist, quantity: exist.quantity + 1} : item))
	} else {
		setCartItems([...cartItems, {...product, quantity: 1}])
	}
	}
	// handle function removeToCart
	function onRemoveToCart(product) {
		const exist = cartItems.find((item) => item.id === product.id)
		if(exist.quantity === 1) {
			setCartItems(cartItems.filter((item) => item.id !== product.id))
		} else {
			setCartItems((cartItems.map((item) => item.id === product.id ? {...exist, quantity: exist.quantity - 1} : item))
		)}		
	}

  return (
    <div>
      <Router>
        <Header cartItems={cartItems}/>
        <Switch>
          <Route exact path="/">
            <Main products={products} onAddToCart={onAddToCart}/>
          </Route>
          <Route path="/cart">
            <Cart cartItems={cartItems}
			 onAddToCart={onAddToCart}
			 onRemoveToCart={onRemoveToCart}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
