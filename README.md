Conversor de Divisas

Nombre del estudiante: DANIEL URIBE

API asignada: ExchangeRate API - tasas de cambio

Endpoint utilizado: https://open.er-api.com/v6/latest/USD

#Descripcion de la aplicacion

Aplicacion hecha con React y Vite que muestra cuanto vale 1 dolar (USD) en unas 160 monedas. Tiene un conversor para pasar un monto de USD a otra moneda y un buscador para encontrar monedas por su codigo.

 Componentes desarrollados

- App: hace la peticion a la API y le pasa los datos a los demas componentes.
- Header: titulo y fecha de ultima actualizacion.
- Conversor: convierte un monto en USD a la moneda que se elija.
- BarraBusqueda: input para buscar monedas.
- ValorActual: tarjeta de cada moneda.
- Footer: pie de pagina.

Datos utilizados de la API

- rates: las tasas de cambio de cada moneda.
- time_last_update_utc: fecha de la ultima actualizacion.

Cada tarjeta muestra el codigo de la moneda, cuanto vale 1 USD en esa moneda y cuanto vale 1 unidad de esa moneda en USD.

Funcionalidad de busqueda o filtro

Se puede buscar una moneda escribiendo su codigo (por ejemplo "cop" o "EUR"). La lista se filtra mientras se escribe.

Funcionalidad adicional implementada

- Conversor: se escribe un monto en USD, se elige una moneda y muestra el resultado.
- Contador que muestra cuantas monedas hay segun la busqueda.
