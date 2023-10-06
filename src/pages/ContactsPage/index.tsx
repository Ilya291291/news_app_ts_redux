import React from "react";
import "./index.css";
import IlyaImg from "assets/img/ilya.jpg";
import routeContacts from "./route";

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts_info">
        <a href="tel:+79168241187" className="contacts_phone">+7 916 824 11 87</a>
        <h2 className="contacts_name">Илья <br />Смирнов</h2>
        <a href="mailto:jumper29121991@gmail.com" className="contacts_email">jumper29121991@gmail.com</a>
        <h2 className="contacts_position">Frontend Developer</h2>
        <p className="contacts_technologies">HTML5 CSS3 JS React</p>
      </div>
      <div className="contacts_image">
        <img src={IlyaImg} alt={IlyaImg} />
      </div>
    </div>
  )
}

export { routeContacts }

export default Contacts