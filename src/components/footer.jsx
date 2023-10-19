import estrelas from "../img/estrelas.png";
import sofa from "../img/sofa.png";
import setas from "../img/setas-de-atualizacao.png";
import muro from "../img/muro.png";
import tecido from "../img/tecido.png";
import telefone from "../img/telefone.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-item">
        <img src={estrelas} alt="estrelas" className="footer-img" />
        <p className="footer-paragraph">+ de 95 anos</p>
      </div>
      <div className="footer-item">
        <img src={sofa} alt="sofá" className="footer-img" />
        <p className="footer-paragraph">Simulador</p>
      </div>
      <div className="footer-item">
        <img src={setas} alt="setas" className="footer-img" />
        <p className="footer-paragraph">Inovação</p>
      </div>
      <div className="footer-item">
        <img src={muro} alt="muro" className="footer-img" />
        <p className="footer-paragraph">Revestimento</p>
      </div>
      <div className="footer-item">
        <img src={tecido} alt="tecido" className="footer-img" />
        <p className="footer-paragraph">Faça você mesmo</p>
      </div>
      <div className="footer-item">
        <img src={telefone} alt="telefone" className="footer-img" />
        <p className="footer-paragraph">Entre em contato</p>
      </div>
    </footer>
  );
}

export default Footer;
