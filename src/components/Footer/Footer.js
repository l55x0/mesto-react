function Footer(props) {
  return (
    <footer className={"footer page__footer"}>
      <p className={"footer__author"}>&copy; {props.text}</p>
    </footer>
  );
}

export default Footer;