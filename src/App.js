// import './style.css';
// import Navbar from './day2/Navbar';
// import Main from './day2/Main';
// import Footer from './day2/Footer';
// import DynamicRendering from './day3/DynamicRendering';
// import Button from './day3/Button';
// import { Message } from './day2/Message';
// import Counter from './day3/Counter';
//import Cricket from "./day3/Cricket";
//import ToggleMessage from "./day3/ToggleMessage";
// import Toogle from './day3/Toogle';
// import TMessage from './day3/TMessage';
// import Navbar from "./Task/Navbar";*/
/*import { useState } from "react";
import Cart from "./day4/Cart";
import Menu from "./day4/Menu";
import Navbar from "./day4/Navbar";
import categories from "./day4/products";/*
// function App() {
//   return(

// <div>
//   <Navbar/>
//   </div>
//   );
// }

// export default App;
{
  /* <Navbar></Navbar> */
/*
}
{
  /* <Main></Main> */
/*
}
{
  /* <Footer></Footer> 
}
{
  /* <Message></Message> 
}
{
  /* <Button></Button> 
}
{
  /* <DynamicRendering></DynamicRendering> 
}
{
  /* <Counter></Counter> 
}
{
  /* <Cricket/>
  <ToggleMessage></ToggleMessage>
  <Toogle></Toogle>
  <TMessage></TMessage> 
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
    <div
      className="space-y-4 my-4"
      style={{
        backgroundImage:
          "url(https://thumbs.dreamstime.com/z/glass-cold-coffee-milk-close-up-coffee-brown-chocolate-blending-milk-texture-food-drink-background-detail-297054794.jpg?w=768)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Navbar category={categories} handleClick={handleClick} />
      <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />

      <Cart products={products} />
    </div>
  );
}

export default App;
*/
/*
function App() {
  return (
    <div>
      <Cricket />
    </div>
  );
}

export default App;

import React from "react";

const App = () => {
  return <div>Hello World</div>;
};

export default App;
*/
// src/App.js
// src/App.js
//day2 2nd sum inline
/*
import React from "react";

const App = () => {
  const headingStyle = {
    color: "green",
  };

  const divStyle = {
    backgroundColor: "lightblue",
    color: "darkblue",
    padding: "10px",
    border: "1px solid blue",
    borderRadius: "5px",
  };

  const paragraphStyle = {
    color: "darkblue",
    fontSize: "16px",
  };

  return (
    <div>
      <h1 style={headingStyle}>Inline Style in JSX Example</h1>
      <div style={divStyle}>
        <p style={paragraphStyle}>
          This is a paragraph with inline styles applied.
        </p>
      </div>
    </div>
  );
};

export default App;
*/
// App.js
/*

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
  <h2>Welcome to the Gardening Store</h2>
  <p>Explore our wide range of gardening products!</p>
  </div>
  );
  
  const Products = () => (
    <div>
    <h2>Our Products</h2>
    <p>List of gardening products goes here...</p>
    </div>
    );
    
    const About = () => (
      <div>
      <h2>About Us</h2>
      <p>Learn more about our gardening store.</p>
      </div>
      );
      
      function App() {
        return (
          <Router>
          <div>
          <nav>
          <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/products">Products</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          </ul>
          </nav>
          
          <hr />
          
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          </div>
          </Router>
          );
        }
        
        export default App;
        
        import GiftShop from "./GiftShop";
        
        import GiftShop from "./GiftShop"; // Adjust the path based on your project structure
        
        function App() {
          return (
            <div className="App">
            <GiftShop />
            </div>
            );
          }
          
          export default App;
          
// App.js
import React from "react";
import Home from "./Home";

function App() {
  return <Home />;
}

export default App;
*/
//helloworld code
/*
import HelloWorld from "./day2/HelloWorld";

const App = () => {
  return <HelloWorld />;
};
export default App;*/
//style code
/*
import Style from "./day2/Style";

function App() {
  return (
    <div>
    <Style />
    </div>
    );
  }
  
  export default App;*/
//gokutransformation code
/*
  import React from "react";
  import GokuTransformation from "./day3/GokuTransformation";
  
  const App = () => {
    return <GokuTransformation />;
  };
  export default App;
  
  //togglemessage code*/
/*
  import ToggleMessage from "./day3/ToggleMessage";
  
  const App = () => {
    return <ToggleMessage />;
  };
export default App;

//form code
import Form from "./day2/Form";

const App = () => {
  return <Form />;
};

export default App;
*/
import Fruit from "./day4/Fruit";
const App = () => {
  return <Fruit />;
};
export default App;
