import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3>Acompanhe as nossas oportunidades</h3>
      <p>Seja o primeiro a saber quando novas vagas serão abertas!</p>
      <form>
        <input type="email" placeholder="Seu e-mail"></input>
        <button type="submit">Cadastrar</button>
      </form>
      <p className="copyright">
        © 2022 OptimusTech. Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
