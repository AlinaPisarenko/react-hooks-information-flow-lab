function Header({ mode, onDarkModeClick }) {
  function handleClick() {
    onDarkModeClick(!mode);
  }

  return (
    <header>
      <h2>Shopster</h2>{" "}
      <button onClick={handleClick}>{mode ? "Dark" : "Light"} Mode</button>
    </header>
  );
}

export default Header;
