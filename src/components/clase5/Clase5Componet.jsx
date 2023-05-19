import React from "react";

function Clase5Componet({ producto }) {
  return (
  <div className="class-componentSection">
    <h3 className="class-componentSection-name">{producto.nome}</h3>
    <img className="class-componentSection-img" src={producto.image} alt={producto.nome} />
    <p className="class-componentSection-precio" >{producto.preco}</p>
  </div>)
}

export default Clase5Componet;
