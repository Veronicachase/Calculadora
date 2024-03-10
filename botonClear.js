import React from "react";
import BotonClear1 from "../hojas-de-estilos/botonClear.css";

const BotonClear = (props) => (
  <div className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;
