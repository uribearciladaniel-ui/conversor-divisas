import { useState, useEffect} from "react";
import ValorActual from "./components/ValorActual"
import BarraBusqueda from "./components/BarraBusqueda"
import Conversor from "./components/Conversor"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [rates, setRates] = useState({})
  const [error, setError] = useState(null)
  const [lastUpdate, setLastUpdate] = useState("")
  
  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        setRates(data.rates)
        setLastUpdate(data.time_last_update_utc)
        setLoading(false)
    })
    .catch(err => {
      setError("No se pudo cargar la conversion")
      setLoading(false)

  })
  }, [])

    if (loading) return <p className="estado">Cargando Informacion...</p>
    if (error) return <p className="estado error">{error}</p>
    const filtered = Object.entries(rates).filter(([code]) =>
    code.includes(search.toUpperCase())
    )

    return(
      <div className="app">
        <Header lastUpdate={lastUpdate} />
        <main className="contenido">
          <Conversor rates={rates} />
          <BarraBusqueda search={search} setSearch={setSearch} />
          <p className="contador">Monedas disponibles: {filtered.length}</p>
          <div className="grid">
            {filtered.map(([code, rate]) => (
              <ValorActual key={code} code={code} rate={rate} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    )

}

export default App