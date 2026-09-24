import { useState } from "react";

function Conversor(props) {

  const [monto, setMonto] = useState(1)
  const [moneda, setMoneda] = useState("COP")
  const resultado = monto * props.rates[moneda]

  return (
    <div className="conversor">
      <h2>Selecciona una moneda a convertir</h2>

      <div className="conversor-fila">
        <input
          type="number"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
        <span> USD = </span>

        <select
          value={moneda}
          onChange={(e) => setMoneda(e.target.value)}
        >
          {Object.keys(props.rates).map((code) => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>

      <p className="resultado">{monto} USD = {resultado.toFixed(2)} {moneda}</p>
    </div>
  )
}

export default Conversor