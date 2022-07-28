import React, { useState } from "react";
import {useEffect} from 'react';
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/toys')
    .then((res) => res.json())
    .then((toyData) => setToys(toyData))
  }, [])
    
  function addNewToy(newToyObject){
    setToys([...toys, newToyObject])
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDeleteToy(id){
    const newToys = toys.filter((toy) => toy.id != id)
    setToys(newToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer handleDeleteToy={handleDeleteToy} toys={toys}/>
    </>
  );
}

export default App;
