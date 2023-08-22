import AvanceUTP from "../../PDF/Plan_estudios_U19101557.pdf";
import Ciberseguridad from "../../PDF/CERTIFICADO CIBERSEGURIDAD - CISCO.pdf";
import Python from "../../PDF/CERTIFICADO PYTHON - CISCO.pdf";
import Ingles from "../../PDF/CERTIFICADO INGLES A2.pdf";
import Excel from "../../PDF/CERTIFICADO EXCEL INTERMEDIO.pdf";
import Oracle from "../../PDF/CERTIFICADO ORACLE.pdf";
import Docker from "../../PDF/CERTIFICADO DOCKER.pdf";
import { Container, Row, Col } from "react-bootstrap";
import ButtonModal from "./ButtonModal";

const CertificationContent = () => {
  return (
    <>
      <div className="title-subtititel my-3">
        <h2>Resumen de estudios</h2>
      </div>
      <Container className="p-4 my-4">
        <Row className="timeline-container justify-content-center">
          <Col xs={12} lg={6} className="p-2">
           
                <ButtonModal
                  title="EDUCACIÓN "
                  icon="fa-solid fa-user-graduate"
                  columna1={[
                    {
                      year: "2019 - En curso",
                      title: "UNIVERSIDAD TECNOLÓGICA DEL PERÚ (UTP)",
                      desc: "Ingeniería de Software, estoy en 9no semestre y mi fecha de egreso aproximado es en Diciembre del 2023",
                      downloadUrl: AvanceUTP,
                    },
                    {
                      year: "2020",
                      title: "CISCO NETWORKING ACADEMY",
                      desc: "Introducción a la Seguridad Cibernética",
                      downloadUrl: Ciberseguridad,
                    },
                  ]}
                  columna2={[
                    {
                      year: "2020",
                      title: "PYTHON INSTITUTE",
                      desc: "PCAP: Programming Essentials in Python",
                      downloadUrl: Python,
                    },
                  ]}
                />

            <br />
          </Col>
          <Col xs={12} lg={6} className="p-2">
                <ButtonModal
                  title="CURSOS - SEMINARIOS "
                  icon="fa-solid fa-award"
                  columna1={[
                    {
                      year: "2023",
                      title: "ORACLE DATABASE MANAGEMENT",
                      desc: "ORACLE UNIVERSITY",
                      downloadUrl: Oracle,
                    },
                    {
                      year: "2023",
                      title: "EXCEL INTERMEDIO",
                      desc: "UNIVERSIDAD TECNOLÓGICA DEL PERÚ (UTP)",
                      downloadUrl: Excel,
                    },
                  ]}
                  columna2={[
                    {
                      year: "2023",
                      title: "INGLÉS A2 MCER",
                      desc: "UNIVERSIDAD TECNOLÓGICA DEL PERÚ (UTP)",
                      downloadUrl: Ingles,
                    },
                    {
                      year: "2020",
                      title: "DOCKER Y NETWORKING DE PRINCIPIANTE A EXPERTO",
                      desc: "UDEMY",
                      downloadUrl: Docker,
                    },
                  ]}
                />
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CertificationContent;
