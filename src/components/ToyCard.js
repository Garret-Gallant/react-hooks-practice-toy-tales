import React from "react";

function ToyCard( { handleDeleteToy, key, toy } ) {
  const {id, name, image, likes} = toy

  function handleDeleteClick(){
    fetch(`http://localhost:4000/toys/${id}`, {
      method: 'DELETE',
    });
    handleDeleteToy(id)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
