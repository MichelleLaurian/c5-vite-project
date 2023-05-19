import React from "react";

function Clase5Componet({ producto }) {
  return (<section>
    <h3>{producto.nome}</h3>
    <img src={producto.image} alt={producto.nome} />
    <p>{producto.preco}</p>
  </section>)
}

export default Clase5Componet;
