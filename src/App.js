import React from "react";
import Navbar from "./components/NavBar/NavBar";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ItemListContainer from "./components/NavBar/ItemListContainer";



function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greetings={"Bienvenido"} />
    </div>
  );
}

export default App
