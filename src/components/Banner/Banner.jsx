import { Container, Col, Row } from "react-bootstrap";
import CV from "../../PDF/CV-JeanCarlosZamudioLabán.pdf";
const Banner = () => {
  return (
    <>
      <Container className="p-4 my-lg-5 my-md-3">
        <Row
          className="justify-content-md-center align-items-center"
          xs={1}
          md={1}
          sm={1}
          lg={2}
        >
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className="text-center text-sm-start">
              <h1 className="title">Jean C. Zamudio</h1>
              <p className="profession">
                Soy un <span>Ingeniero de Software</span> apasionado por la
                programación. La creación de soluciones innovadoras es el motor
                que impulsa cada línea que escribo. <br/>
              </p>
              <div className="icons my-3">
                <p className="profession">Puedes <span>contactarme</span> en:</p>
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
                  href="https://wa.me/51969754563"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp fa-2x p-3"></i>
                </a>
              </div>
              <a
                href={CV}
                className="btn btn-outline-info"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar CV
              </a>
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
        <div className="camera"></div>
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
export default Banner;
