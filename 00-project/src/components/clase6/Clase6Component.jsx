import React from "react";

function Clase6Component({ ciudades }) {
  if(ciudades.country == "AR"){
  return (
    <div className="ciudades-container" >

      <h3 className="ciudades-cotainerpais">{ciudades.country}</h3>
      <p className="ciudades-cotainerCity">{ciudades.city}</p>
      <p className="ciudades-cotainerPopulation">{ciudades.population}</p>
    </div>
  )}
}

export default Clase6Component;
