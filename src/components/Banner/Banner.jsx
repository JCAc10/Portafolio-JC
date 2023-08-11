import { Container, Button, Image, Col, Row } from "react-bootstrap";
import svgImg from "../../svg/mobile-app.svg";
const Banner = () => {
  return (
    <>
      <Container className="p-4 my-lg-5 my-md-3">
        <Row className="justify-content-md-center align-items-center" xs={1} md={1} sm={1} lg={2}>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="text-center text-sm-start">
              <h1 className="title">Jean C. Zamudio</h1>
              <p className="profession">
                Soy un <span>Ingeniero de Software</span> apasionado por la
                programación. La creación de soluciones innovadoras es el
                motor que impulsa cada línea que escribo.
                {/*Mantengo mi mente abierta a las nuevas tecnologías, metodologías y tendencias, 
              siempre listo para adoptar aquellas que puedan elevar mi trabajo al siguiente nivel.*/}
              </p>
              <div className="icons my-3">
                <a
                  href="https://github.com/JCAc10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github fa-2x p-3"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jeanzamudiolabán"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin fa-2x p-3"></i>
                </a>
                <a
                  href="mailto:jeanzamudio29@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-google fa-2x p-3"></i>
                </a>
              </div>
              <Button variant="outline-info" onClick={handleDownloadPDF}>
                Descargar CV
              </Button>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
          <Phone />
          </Col>
        </Row>
      </Container>
    </>
  );
};
const Phone = () => {
  return (
    <div className="phone-container p-3">
      <div className="phone">
        <div className="camera"></div> {/* Agrega la cámara */}
        <div className="screen">
          <div className="content">
            <div className="content__container">
              <ul className="content__container__list">
                <li className="content__container__list__item">INNOVA</li>
                <li className="content__container__list__item">DISEÑA</li>
                <li className="content__container__list__item">PLANEA</li>
                <li className="content__container__list__item">RENUEVA</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="button-row">
          <div className="button"></div>
          <div className="button"></div>
          <div className="button"></div>
        </div>
      </div>
    </div>
  );
};
const handleDownloadPDF = () => {
  const link = document.createElement("a");
  link.href = "../../PDF/CV-JeanCarlosZamudioLabán.pdf"; // Cambia esto por la ruta correcta de tu archivo PDF
  link.download = "CV-JeanCarlosZamudioLabán.pdf"; // Cambia esto por el nombre que quieras para el archivo descargado
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default Banner;
