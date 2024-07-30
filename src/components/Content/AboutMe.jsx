import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const AboutMe = () => {
  return (
    <Container>
      <Row className="justify-content-md-center p-5" xs={1} md={1} sm={1} lg={2}>
        <Col xs={12} lg={6} className="d-flex flex-column justify-content-center align-items-center">
        <Image className="p-2"
              src="https://avatars.githubusercontent.com/u/133301187?v=4"
              roundedCircle
              fluid
              width={400}
              height={400}
            />
        </Col>
        <Col xs={12} lg={6}>
          <div className="text-start">
            <h2>Sobre mí</h2>
            <p className="info-me">
              Mi nombre es Jean Carlos Zamudio Labán, soy una persona que desde pequeño se ha sentido atraído por el mundo de las TICs.
              Especialmente, el desarrollo de aplicaciones para dispositivos móviles, pues he desarrollado proyectos desde mi etapa escolar,
              empleando AppInvertor2.
              Me considero una persona responsable, que sabe lidiar con los problemas y hallar soluciones de manera efectiva y eficaz,
              soy resiliente, sé trabajar en equipo para lograr un trabajo en conjunto con resultados exitosos y sé aprender de mis errores.
              Entre mis objetivos está desempeñarme 
              como <span>Desarrollador FullStack</span>.
            </p>
            <div className="text-start">
             <ul className="data-me">
             <li className="my-2"><span className="item-list-tittle"><i class="fa-solid fa-chevrons-right"></i> Edad:</span>22 años</li> 
             <li className="my-2"><span className="item-list-tittle"><i class="fa-solid fa-chevrons-right"></i> Ciudad:</span>Lima, Perú</li> 
             <li className="my-2"><span className="item-list-tittle"><i class="fa-solid fa-chevrons-right"></i> Correo:</span>jeanzamudio56@gmail.com</li> 
             <li className="my-2"><span className="item-list-tittle"><i class="fa-solid fa-chevrons-right"></i> Teléfono:</span>+(51) 969754563</li> 
             <li className="my-2"><span className="item-list-tittle"><i class="fa-solid fa-chevrons-right"></i> Disponibilidad:</span>INMEDIATA</li> 
             </ul>
            </div>
            <p>
              Entre algunos de mis pasatiempos se puede encontrar:
            </p>
          </div>
          <div className="hobbies">
            <Row>
              <ContentHobbies icon="fa-solid fa-dumbbell" detail="Gym" />
              <ContentHobbies icon="fa-solid fa-book" detail="Leer" />
            </Row>
            <Row>
              <ContentHobbies icon="fa-solid fa-user-group" detail="Salir con amigos" />
              <ContentHobbies icon="fa-solid fa-music" detail="Escuchar música" />
            </Row>
            <Row>
              <ContentHobbies icon="fa-solid fa-film" detail="Ver películas" />
              <ContentHobbies icon="fa-solid fa-umbrella-beach" detail="Ir a la playa" />
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const ContentHobbies = ({ icon, detail }) => {
  return (
    <Col xs={6} sm={6} md={6} lg={6} xl={6} className="mb-3">
      <div className="hobby-item">
        <div className="hobby-icon"><i className={icon}></i></div>
        <div className="hobby-text">{detail}</div>
      </div>
    </Col>
  );
};

export default AboutMe;
