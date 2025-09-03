import React from 'react';
import reactDOM from "react-dom/client";

function App() {
  return <h1>Hello Good Morning REACT</h1>;
}

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);