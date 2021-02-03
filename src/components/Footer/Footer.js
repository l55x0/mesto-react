function Footer({ text }) {
  return (
    <footer className={"footer page__footer"}>
      <p className={"footer__author"}>&copy; {text}</p>
    </footer>
  );
}

export default Footer;