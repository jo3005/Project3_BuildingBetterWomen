import React from "react";
import {Container,Col,Row,Jumbotron,Button,Image,Card,blockquote,Navbar} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCopyright, faCopy} from '@fortawesome/free-regular-svg-icons';

import "./style.css";

function Footer() {
  return (
    <>
      <Navbar fixed="sticky-bottom" className="footerNavbar text-right" fluid>
        <p className="copywright_det"> <FontAwesomeIcon icon={faCopyright} className="copywright_det"/> ZofiConsulting 2020</p>
      </Navbar>
    </>
  );
}

export default Footer;
