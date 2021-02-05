function Header({ srcLogo, altLogo }) {
  return (
    <header className={"header page__header"}>
      <img src={srcLogo} alt={altLogo} className={"header__logo"} />
    </header>
  );
}

export default Header;
