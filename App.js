import "./App.css";

import Boton from "./componentes/boton.js";
import Pantalla from "./componentes/pantalla.js";
import BotonClear from "./componentes/botonClear.js";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "0";
  };

  const agregarInput = (valor) => {
    if (input === "" || input === "Ingrese valores para iniciar los cálculos") {
      if (esOperador(valor)) {
        setInput("Ingrese valores para iniciar los cálculos");
        return;
      }
    } else if (esOperador(valor) && esOperador(input[input.length - 1])) {
      setInput(input.slice(0, -1) + valor);
      return;
    }

    if (
      input === "0" ||
      input === "Ingrese valores para iniciar los cálculos"
    ) {
      setInput(valor);
    } else {
      setInput(input + valor);
    }
  };
  const calcularResultado = () => {
    if (input) {
      try {
        setInput(String(evaluate(input.replace("x", "*"))));
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput("Ingrese valores para iniciar los cálculos");
    }
  };

  const manejarClear = () => setInput("0");

  return (
    <div className="App">
      <div className="logo-contenedor">
        <h1>Calculadora</h1>
      </div>

      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>X</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={manejarClear}>Clear</BotonClear>

          {}
        </div>
      </div>
    </div>
  );
}

export default App;
