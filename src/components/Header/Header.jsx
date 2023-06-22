import { useState } from "react";
import { Button, Image } from "react-bootstrap";

const Header = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [showNav, setShowNav] = useState(true);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <nav className={`sidebar-navigation ${showNav ? "" : "hidden"}`}>
        <ul className="p-0">
          <li>
            <Image
              src="https://avatars.githubusercontent.com/u/133301187?v=4"
              className="profile-image"
            />
          </li>
          <li
            className={activeItem === 0 ? "active" : ""}
            onClick={() => handleItemClick(0)}
          >
            <ContentList icon="fa-solid fa-user" detail="ABOUT ME" />
          </li>
          <li
            className={activeItem === 1 ? "active" : ""}
            onClick={() => handleItemClick(1)}
          >
            <ContentList icon="fa-solid fa-code" detail="SKILLS" />
          </li>
          <li
            className={activeItem === 2 ? "active" : ""}
            onClick={() => handleItemClick(2)}
          >
            <ContentList icon="fa-solid fa-heart" detail="HOBBIES" />
          </li>
          <li
            className={activeItem === 3 ? "active" : ""}
            onClick={() => handleItemClick(3)}
          >
            <ContentList icon="fa-solid fa-graduation-cap" detail="EDUCATION" />
          </li>
          <li
            className={activeItem === 4 ? "active" : ""}
            onClick={() => handleItemClick(4)}
          >
            <ContentList icon="fa-solid fa-laptop-code" detail="PROJECTS" />
          </li>
        </ul>
      </nav>

      <Button className="toggle-button" variant="dark" onClick={toggleNav}>
        {showNav ? 
        <ContentList icon="fa-sharp fa-solid fa-arrow-left" detail="Ocultar"/>
        : <i className="fa-sharp fa-solid fa-bars"></i>}
      </Button>
    </>
  );
};

const ContentList = ({ icon, detail }) => {
  return (
    <>
      <i className={icon}></i>
      <div className="info-icon text-center">{detail}</div>
      <span className="tooltip">{detail}</span>
    </>
  );
};

export default Header;
