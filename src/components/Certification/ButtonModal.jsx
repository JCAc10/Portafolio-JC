import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

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
          variant="outline-warning"
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
                              <a href={item.downloadUrl} className="btn btn-outline-info my-2" target="_blank" rel="noopener noreferrer">
                                VER PDF
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
                              <a href={item.downloadUrl} className="btn btn-outline-info my-2" target="_blank" rel="noopener noreferrer">
                                VER PDF
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
  
  export default ButtonModal