import FastageImg from "../../img/Fastage-Fondo.jpg";
import BlueSkyTech from "../../img/BlueSkyTech-Fondo.jpg";
import PixelZ from "../../img/Pixel-Z.jpg";
import VB_WORD from "../../img/VB-NET_WORD.jpg";
import BlueSkyRestaurant from "../../img/BlueSkyRestaurant-Fondo.jpg";
import APP_TB from "../../img/TB-APP-Fondo.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";

const ProjectsContent = () => {
  return (
    <>
      <div className="title-subtititel my-3">
        <h2>Mis proyectos</h2>
      </div>
      <Container className="p-4 my-4">
        <Row>
          {renderCard(
            "SISTEMA DE ESCRITORIO - FASTAGE",
            "Realizado usando Java Netbeans 8.2 y MySQL, simula un sistema de ventas básico con facturas en PDF.",
            FastageImg,
            1,
            "https://www.youtube.com/watch?v=cuIk2U_bYTU",
            "https://github.com/JCAc10/Fastage-SistemaDesktop"
          )}
          {renderCard(
            "ECOMMERCE - BLUESKY TECHNOLOGY",
            "Sistema de ventas web para venta de aparatis tecnológicos, usando HTML, CSS, JavaScript, PHP y MySQL",
            BlueSkyTech,
            2,
            "https://www.youtube.com/watch?v=5a-aU6Q6Erk",
            "https://github.com/JCAc10/BlueSkyTech-Ecommerce"
          )}
        </Row>
        <Row>
          {renderCard(
            "VIDEOJUEGO 2D - PIXEL Z",
            "Desarrollado en Unity 2D, cuenta con sistema de vidas, disparos, puntaje, plataformas, multijugador y parallax",
            PixelZ,
            1,
            "https://www.youtube.com/watch?v=cuIk2U_bYTU",
            "https://github.com/JCAc10/Unity2D-Pixel_Z"
          )}
          {renderCard(
            "SISTEMA DE ESCRITORIO - MANIPULACIÓN DE WORD",
            "Realizado usando Visual Basic .NET, nos ayuda a crear un documento .docx, realizar la búsqueda de palabras, crear tablas simples, convertir a PDF y cargar documentos para su visualización",
            VB_WORD,
            2,
            "https://www.youtube.com/watch?v=cuIk2U_bYTU",
            "https://github.com/JCAc10/WordManipulation_VB-.NET"
          )}
        </Row>
        <Row>
          {renderCard(
            "APLIACIÓN MÓVIL- TEST TABLA PERIÓDICA",
            "Implementado en Android Studio, cuenta con conexión a SQL Server, generación de QR y usa JSON para almacenar las preguntas",
            APP_TB,
            1,
            "https://www.youtube.com/watch?v=cuIk2U_bYTU",
            "https://github.com/JCAc10/appTablaPeriodica"
          )}
          {renderCard(
            "SISTEMA DE WEB - RESTAURANTE BLUESKY",
            "Utilizando Java Servlets conectado a MySQL, simula un punto de ventas de hamburguesa con carrito de compras y reportes PDF",
            BlueSkyRestaurant,
            2,
            "https://www.youtube.com/watch?v=cuIk2U_bYTU",
            "https://github.com/JCAc10/proyectoRestaurante"
          )}
        </Row>
      </Container>
    </>
  );
};

const renderCard = (title, text, imageUrl, cardKey, videoId, github) => {
  return (
    <Col key={cardKey} xs={12} lg={6} className="p-2">
      <Card className="bg-dark text-white">
        <div className="position-relative">
          <Card.Img src={imageUrl} alt="Card image" />
          <div className="overlay"></div>
          <Card.ImgOverlay>
            <div className="card-content">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <div className="icons my-3">
                <a href={videoId} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-youtube fa-2x px-3"></i>
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github fa-2x px-3"></i>
                </a>
              </div>
            </div>
          </Card.ImgOverlay>
        </div>
      </Card>
    </Col>
  );
};

export default ProjectsContent;
