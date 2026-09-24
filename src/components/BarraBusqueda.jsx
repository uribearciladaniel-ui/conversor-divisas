function BarraBusqueda(props){
    return(
        <input type="text"
        className="busqueda"
        placeholder="Buscar moneda"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)} />
    )
}

export default BarraBusqueda