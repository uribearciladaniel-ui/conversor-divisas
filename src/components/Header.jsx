function Header(props) {
  return (
    <header className="header">
      <h1>Conversor de <span>Divisas</span></h1>
      <p>Ultima actualizacion: {props.lastUpdate}</p>
    </header>
  )
}

export default Header
