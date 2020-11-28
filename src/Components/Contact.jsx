import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import cv from "./CV.pdf";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="contactPage">
      <MDBRow className="contactCard">
        <MDBCol md="2">
          <MDBCard>
            <img
            className="myPhoto"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFaoZxgSJBCBQ/profile-displayphoto-shrink_800_800/0?e=1610582400&v=beta&t=5Xqeue4zfX4nlPuvid8VCaGH5dCyw3J2qcFJdx89aqE"
              alt="Moe"
              width="200px"
            ></img>

            <MDBCardBody className="text-center">

              <MDBCardTitle className="card-title">
                <strong>Mohammad Jundi</strong>
              </MDBCardTitle>

              <p className="font-weight-bold blue-text">
                Fron-End Web Developer
              </p>

              {/* <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.{" "}
              </MDBCardText> */}

              <MDBCol md="12" className="d-flex justify-content-center">
                <a
                  href="https://github.com/mohammad-jundi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="contactIcon" icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammad-jundi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="contactIcon" icon={faLinkedin}/>
                </a>
              </MDBCol>
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="BtnPart"
              >
                <button className="cvBtn">Download CV</button>
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Contact;
