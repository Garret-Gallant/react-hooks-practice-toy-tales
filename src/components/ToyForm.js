import React, { useState } from "react";

function ToyForm({ addNewToy }) {
  const [newToyName, setNewToyName] = useState("");
  const [newToyImage, setNewToyImage] = useState("");

  const newToyObject = {
    name: newToyName,
    image: newToyImage,
    likes: 0,
  };

  return (
    <div className="container">
      <form
        onSubmit={() => {
          fetch("http://localhost:4000/toys", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newToyObject),
          })
            .then((res) => res.json())
            .then((newToyObject) => addNewToy(newToyObject));
        }}
        className="add-toy-form"
      >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => setNewToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => setNewToyImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
