// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
/*import Cricket from "./day3/Cricket";
/*import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App; //Default  exports*/

/*const App = () => {
  return <Cricket />;
};

export default App;*/
/*
import { useState } from "react";
import Cart from "./day4/Cart";
import Menu from "./day4/Menu";
import Navbar from "./day4/Navbar";
import categories from "./day4/products";
function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [products, setProducts] = useState([]);

  const handleClick = (index) => {
    setActiveCategory(categories[index]);
  };

  const handleAddToCart = (item) => {
    setProducts([...products, item]);
  };

  return (
    <div className="space-y-4 my-4">
      <Navbar category={categories} handleClick={handleClick} />
      <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
      <Cart products={products} />
    </div>
  );
}

export default App;
*/
// App.js
import React from "react";
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <div>
      <h2>Welcome to My Greeting Card Website</h2>
      <HelloWorld />
    </div>
  );
}

export default App;
