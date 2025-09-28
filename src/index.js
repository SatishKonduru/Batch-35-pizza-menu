import React from 'react';
import reactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  console.log(props);

  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />

      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>₹ {props.pizzaObj.price + 10}</span>
      </div>
    </li>
  );
}

function Header() {
  // const myStyles = {
  //   color: "red",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // };
  // return <h1 style={myStyles}>RSK's Pizza Hut</h1>;
  return (
    <header className="header">
      <h1>RSK's Pizza Hut</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* <ul className="pizzas">
        {numPizzas &&
          pizzas.map((pizza) => {
            return (
              // <Pizza
              //   name={pizza.name}
              //   ingredients={pizza.ingredients}
              //   photoName={pizza.photoName}
              //   price={pizza.price}
              // />
              <Pizza pizzaObj={pizza} key={pizza.name} />
            );
          })}
      </ul> */}

      <ul className="pizzas">
        {numPizzas > 0 ? (
          pizzas.map((pizza) => {
            return (
              // <Pizza
              //   name={pizza.name}
              //   ingredients={pizza.ingredients}
              //   photoName={pizza.photoName}
              //   price={pizza.price}
              // />
              <Pizza pizzaObj={pizza} key={pizza.name} />
            );
          })
        ) : (
          <p>We're still working on our Menu. Please come back later :)</p>
        )}
      </ul>
    </main>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 5;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're Open Until {closeHour}:00 . Come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};

// function Xyz(){
//   <Abc x = {7}/>
// } 


// function Abc(x){
//   x = 20;
//   return <h1>{x}</h1>
// }



const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);