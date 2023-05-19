import React from "react";
import Clase5Componet from "./Clase5Componet";


const produtos = [
  {
    id: "1",
    nome: "Macbook Air 13 Chip M1 256gb",
    image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    preco: "R$ 7999.00",
  },
  {
    id: "2",
    nome: "Echo Dot (4ª Geração)",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    preco: "R$ 379.00",
  },
  {
    id: "3",
    nome: "Câmera Ip Sem Fio 360°",
    image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    preco: "R$ 199.00",
  },
  {
    id: "4",
    nome: "Fechadura Eletrônica Digital Inteligente Zigbee",
    image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    preco: "R$ 1599.00",
  },
];

function Clase5() {

  return (
    <div className="card-padre">
      {produtos.map((producto) => (
        <div className="card" key={producto.id}>
          <Clase5Componet producto={producto} />
        </div>
      ))}
    </div>
  )


}

export default Clase5;
