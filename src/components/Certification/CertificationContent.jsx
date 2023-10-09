import AvanceUTP from "../../PDF/AVANCE PLAN DE ESTUDIOS.pdf";
import Ciberseguridad from "../../PDF/CERTIFICADO CIBERSEGURIDAD - CISCO.pdf";
import Python from "../../PDF/CERTIFICADO PYTHON - CISCO.pdf";
import Ingles from "../../PDF/CERTIFICADO INGLES A2.pdf";
import Excel from "../../PDF/CERTIFICADO EXCEL INTERMEDIO.pdf";
import Oracle from "../../PDF/CERTIFICADO ORACLE.pdf";
import VBSQL from "../../PDF/CERTIFICADO VISUAL BASIC NET Y SQL.pdf";
import { Container, Row, Col } from "react-bootstrap";
import ButtonModal from "./ButtonModal";

const CertificationContent = () => {
  return (
    <>
      <div className="title-subtititel">
        <h2>Mis estudios</h2>
      </div>
      <Container className="p-4 my-4">
        <Row className="timeline-container">
          <Col className="p-2">
            <div className="card-style">
              <div class="card">
                <div class="img-avatar"></div>
                <div class="card-text">
                  <div class="portada">
                  </div>
                  <div class="title-total">
                    <div class="title">CERTIFICADOS</div>
                    <h2>EDUCACIÓN</h2>

                    <div class="desc">
                    He estudiado en diversos lugares 
                    para fortalecer mis conocimientos. A continuación,
                    mostraré algunos de ellos.
                    </div>
                    <div class="">
                      <ButtonModal
                        title="EDUCACIÓN "
                        icon="fa-solid fa-user-graduate"
                        columna1={[
                          {
                            year: "2019 - En curso",
                            title: "UNIVERSIDAD TECNOLÓGICA DEL PERÚ (UTP)",
                            desc: "Ingeniería de Software, estoy en 9no semestre y mi fecha de egreso aproximado es en Marzo del 2024",
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </Col>
          <Col className="p-2">
            <div className="card-style">
              <div class="card">
                <div class="img-avatar"></div>
                <div class="card-text">
                  <div class="portada2">
                  </div>
                  <div class="title-total">
                    <div class="title">CERTIFICADOS</div>
                    <h2>CURSOS</h2>

                    <div class="desc">
                      Como parte de mi eduación, he participado en cursos 
                      extracurriculares para mejorar mis habilidades.
                    </div>
                    <div class="">
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
                            year: "2023",
                            title: "VB .NET Y SQLserver",
                            desc: "UDEMY",
                            downloadUrl: VBSQL,
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CertificationContent;
