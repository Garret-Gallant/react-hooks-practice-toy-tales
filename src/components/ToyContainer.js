import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ handleDeleteToy, toys }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard 
        key={toy.id}
        handleDeleteToy={handleDeleteToy} 
        toy={toy} />
      ))}
    </div>
  );
}

export default ToyContainer;
