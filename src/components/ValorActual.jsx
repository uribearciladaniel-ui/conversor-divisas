function ValorActual(props) {
    return(
        <div className="card">
            <h3>{props.code}</h3>
            <p>1 USD = {props.rate} {props.code}</p>
            <p>1 {props.code} = {(1 / props.rate).toFixed(6)} USD</p>
        </div>
    )
}

export default ValorActual