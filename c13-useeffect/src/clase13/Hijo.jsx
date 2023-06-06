import { useEffect, useState } from "react";

function Hijo({ pedido }) {

  useEffect(() => {
    return () => {
      alert('su pedido fue cancelado')
      console.log('componente desmontado');
    };
  }, []);


  return (
    <>
      <div>1. {pedido.name} de: <p> {pedido.type}</p></div>

    </>
  );
}

export default Hijo;
