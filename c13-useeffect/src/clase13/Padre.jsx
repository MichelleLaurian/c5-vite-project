import { useEffect, useState } from "react";
import Hijo from "./Hijo";

function Padre() {
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [pedido, setPedido] = useState({
    name: 'Pizza',
    type: 'Muza'
  });


  const toggleComponent = () => {
    console.log('toggle component')
    setToggle(false)
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);

  return (
    <>
      <h3>Sus pedidos</h3>
      {loading
        ? 'Cargando ...'
        : <div>
          {toggle ? <>
            <Hijo pedido={pedido} />
            <button onClick={toggleComponent}>Cancelar Pedido</button></>
            : 'No tiene pedidos'
          }
        </div>}

    </>
  );
}

export default Padre;
