import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";

const Timeline = () => {
  return (
    <>
    <div className="title-subtititel my-3">
        <h2>Resumen de estudios</h2>
      </div>
      <Container className="p-4 my-4">
      <Row className="timeline-container justify-content-center">
        <Col xs={12} lg={6} className="p-2">
        <Card bg="dark" text="light">
        <Card.Img variant="top" src="https://i.ytimg.com/vi/yNRhQm7Y7pk/maxresdefault.jpg"/>
        <Card.Body>
        {/*<Card.Title>MI FORMACIÓN ACADÉMICA</Card.Title>
          <Card.Text>
          Mi viaje educativo está marcado por una serie de logros y compromisos con la 
          excelencia académica. He dedicado tiempo y esfuerzo a una variedad de cursos y
          programas educativos que han enriquecido mi conocimiento y habilidades. 
          </Card.Text>*/}
          <ButtonModal
            title="EDUCACIÓN "
            icon = "fa-solid fa-user-graduate"
            columna1={[
              {
                year: "2019 - En curso",
                title: "UNIVERSIDAD TECNOLÓGICA DEL PERÚ (UTP)",
                desc: "Me encuentro cursando la carrera de Ingeniería de Software, estoy en 9no semestre y mi fecha de egreso aproximado es en Diciembre del 2023",
                downloadUrl: "../../PDF/CV-JeanCarlosZamudioLabán.pdf",
              },
              {
                year: "2020",
                title: "CISCO NETWORKING ACADEMY",
                desc: "Introducción a la Seguridad Cibernética",
                downloadUrl: "../../PDF/CERTIFICADO CIBERSEGURIDAD - CISCO.pdf",
              },
            ]}
            columna2={[
              {
                year: "2020",
                title: "PYTHON INSTITUTE",
                desc: "PCAP: Programming Essentials in Python",
                downloadUrl: "../../PDF/CERTIFICADO PYTHON - CISCO.pdf",
              },
            ]}
          />
        </Card.Body>
      </Card>
      <br />
     
        </Col>
        <Col xs={12} lg={6} className="p-2">
        <Card bg="dark" text="light">
        <Card.Img variant="top" src="https://i.ytimg.com/vi/yNRhQm7Y7pk/maxresdefault.jpg"/>
        <Card.Body>
       
          <ButtonModal
            title="CURSOS - SEMINARIOS "
            icon = "fa-solid fa-award"
            columna1={[
              {
                year: "2023",
                title: "ORACLE UNIVERSITY",
                desc: "Oracle Database Management",
                downloadUrl: "URL_DEL_ARCHIVO_PDF4",
              },
              {
                year: "2023",
                title: "EXCEL INTERMEDIO",
                desc: "UNIVERSIDAD TECNOLÓGICA DEL PERÚ (UTP)",
                downloadUrl: "../../PDF/CERTIFICADO EXCEL INTERMEDIO.pdf",
              },
            ]}
            columna2={[
              {
                year: "2023",
                title: "DESARROLLO DE APLICACIONES MÓVILES",
                desc: "UNIVERSIDAD TECNOLÓGICA DEL PERÚ (UTP)",
                downloadUrl: "URL_DEL_ARCHIVO_PDF6",
              },
              {
                year: "2023",
                title: "INGLÉS A2 MCER",
                desc: "UNIVERSIDAD TECNOLÓGICA DEL PERÚ (UTP)",
                downloadUrl: "../../PDF/CERTIFICADO INGLES A2.pdf",
              },
            ]}
          />
        </Card.Body>
      </Card>
      <br />
     
        </Col>
      </Row>
    </Container>
    </>
    
  );
};

const ButtonModal = ({ title, icon, columna1, columna2 }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (content) => {
    setSelectedContent(content);
    setShowModal(true);
  };

  return (
    <>
      
      <Button size="lg"
        variant="outline-light"
        onClick={() => handleOpenModal(columna1.concat(columna2))}
      >
        {title} 
        <i className={icon}></i>
      </Button>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        dialogClassName="custom-modal modal-90w"
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        size="xl"
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <button className="custom-close-button" onClick={handleCloseModal}>
            &times;
          </button>
        </Modal.Header>

        <Modal.Body>
          {selectedContent && (
            <Container>
              <Row>
                <Col xs={12} md={6}>
                  <div className="timeline">
                    {columna1.map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                          <div className="timeline-balloon">
                            <h3 className="">{item.title}</h3>
                            <p>{item.desc}</p>
                            <div className="timeline-year">{item.year}</div>
                            <a href={item.downloadUrl} download className="btn btn-outline-info my-2" target="_blank" rel="noopener noreferrer">
                              Descargar
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="timeline">
                    {columna2.map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                          <div className="timeline-balloon">
                            <h3 className="">{item.title}</h3>
                            <p>{item.desc}</p>
                            <div className="timeline-year">{item.year}</div>
                            <a href={item.downloadUrl} download className="btn btn-outline-info my-2" target="_blank" rel="noopener noreferrer">
                              Descargar
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Timeline;
