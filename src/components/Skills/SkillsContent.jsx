import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  ProgressBar,
  Modal,
  Button,
} from "react-bootstrap";

const Skills = () => {
  return (
    <>
      <div className="title-subtititel my-lg-4 my-md-2">
        <h2>Mis Habilidades</h2>
      </div>
      <Container className="p-2 my-lg-4 my-md-2">
        <Row className="mt-5 m-2">
          <Col xs={12} lg={6} className="p-1">
            <div className="interests icon-box">
            <i class="fa-solid fa-globe" style={{ color: "#FF5733", fontSize: "28px" }}/>&nbsp;
              <p className="mb-0">Desarrollo Web</p>
              <ButtonModal
                content={[
                  <ProgressBarData tittle="HTML" per={80} color="info" />,
                  <ProgressBarData tittle="CSS" per={80} color="info" />,
                  <ProgressBarData tittle="SCSS" per={80} color="info" />,
                  <ProgressBarData tittle="JAVASCRIPT" per={80} color="info" />,
                  <ProgressBarData tittle="PHP" per={80} color="info" />,
                ]}
              />
            </div>
          </Col>
          <Col xs={12} lg={6} className="p-1">
            <div className="interests icon-box">
            <i class="fa-solid fa-users" style={{ color: "#66CCFF", fontSize: "28px" }}/>&nbsp;
              <p className="mb-0">Metodologías de trabajo</p>
              <ButtonModal
                content={[
                  <ProgressBarData tittle="SCRUM" per={80} color="info" />,
                  <ProgressBarData tittle="RUP" per={80} color="info" />,
                ]}
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-5 m-2">
          <Col xs={12} lg={6} className="p-1">
            <div className="interests icon-box">
            <i class="fa-solid fa-code" style={{ color: "#993300", fontSize: "28px" }}/>&nbsp;
              <p className="mb-0">Lenguajes de programación</p>
              <ButtonModal
                content={[
                  <ProgressBarData tittle="JAVA" per={78} color="danger" />,
                  <ProgressBarData tittle="PYTHON" per={68} color="danger" />,
                  <ProgressBarData tittle="C#" per={68} color="danger" />,
                  <ProgressBarData tittle="C++" per={68} color="danger" />,
                ]}
              />
            </div>
          </Col>
          <Col xs={12} lg={6} className="p-1">
            <div className="interests icon-box">
            <i class="fa-solid fa-database" style={{ color: "#FFFF66", fontSize: "28px" }}/>&nbsp;
              <p className="mb-0">Gestor de base de datos</p>
              <ButtonModal
                content={[
                  <ProgressBarData tittle="MySQL" per={78} color="warning" />,
                  <ProgressBarData tittle="ORACLE" per={68} color="warning" />,
                  <ProgressBarData
                    tittle="MS SQL Server"
                    per={68}
                    color="warning"
                  />,
                ]}
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-5 m-2">
          <Col xs={12} lg={6} className="p-1">
            <div className="interests icon-box">
            <i class="fa-solid fa-desktop" style={{ color: "#CC9900", fontSize: "28px" }}/>&nbsp;
              <p className="mb-0">Frameworks</p>
              <ButtonModal
                content={[
                  <ProgressBarData tittle="REACT" per={78} color="success" />,
                  <ProgressBarData tittle="LARAVEL" per={68} color="success" />,
                  <ProgressBarData tittle="FLUTTER" per={68} color="success" />,
                  <ProgressBarData
                    tittle="UNITY 2D"
                    per={68}
                    color="success"
                  />,
                ]}
              />
            </div>
          </Col>
          <Col xs={12} lg={6} className="p-1">
            <div className="interests icon-box">
            <i class="fa-solid fa-lightbulb" style={{ color: "#99FF66", fontSize: "28px" }}/>&nbsp;
              <p className="mb-0">IDEs</p>
              <ButtonModal
                content={[
                  <ProgressBarData
                    tittle="APACHE NETBEANS"
                    per={78}
                    color="success"
                  />,
                  <ProgressBarData
                    tittle="ANDROID STUDIO"
                    per={68}
                    color="success"
                  />,
                  <ProgressBarData
                    tittle="VISUAL STUDIO .NET"
                    per={68}
                    color="success"
                  />,
                ]}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const ProgressBarData = ({ tittle, per, color }) => {
  return (
    <div className="p-2">
      <div className="text-start">{tittle}:</div>
      <div className="text-end">
        <i className="float-right">{per}%</i>
      </div>
      <ProgressBar now={per} label={`${per}%`} visuallyHidden variant={color} />
    </div>
  );
};

const ButtonModal = ({ content }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Button
        className="mx-2"
        size="sm"
        variant="outline-light"
        onClick={handleOpenModal}
      >
        <i className="fa-solid fa-up-right-from-square" />
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
          <Modal.Title>Habilidades</Modal.Title>
          <button className="custom-close-button" onClick={handleCloseModal}>
            &times;
          </button>
        </Modal.Header>

        <Modal.Body>{content}</Modal.Body>
      </Modal>
    </>
  );
};

export default Skills;