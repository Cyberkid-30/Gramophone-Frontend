import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="gramophone">
        <h3>Gramophone Academy of Music</h3>
        <div className="social-links">
          <a href="">
            <img src="assets\icons\facebook-2.png" alt="" />
          </a>
          <a href="">
            <img src="assets\icons\linkedin.png" alt="" />
          </a>
          <a href="">
            <img src="assets\icons\youtube.png" alt="" />
          </a>
          <a href="">
            <img src="assets\icons\instagram.png" alt="" />
          </a>
        </div>
      </section>
      <div className="copyright">&copy; 2024 Designed by Quetzal Tech.</div>
    </footer>
  );
};

export default Footer;
