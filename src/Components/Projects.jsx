import React from "react";
import food2 from "./img/food2.jpg";

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBBtn,
} from "mdbreact";

const Projects = () => {
  return (
    <div>
      <MDBRow>
        <MDBCol>
          <MDBCard>
            <h2>E-Commerce Project</h2>
            <p>
              Technologies Used: <span>ReactJS,firebase, CSS</span>
            </p>
            <a
              href="https://github.com/mohammad-jundi/e-commerce-mohammad-ray"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBCardImage
                className="proImg"
                style={{ height: "25rem" }}
                src={food2}
              />
            </a>
            <MDBCardBody className="text-center">
              <MDBCardText className="projDis">
                An app to help student who are going through Learn.Co
                curriculum, that we went through and try to make it easier for
                them.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <h2>Movie Project</h2>
            <p>
              Technologies Used: <span>ReactJS, Bootstarp, CSS</span>
            </p>

            <a
              href="https://github.com/mohammad-jundi/e-commerce-mohammad-ray"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBCardImage
                className="proImg"
                style={{ height: "25rem" }}
                src={food2}
              />
            </a>
            <MDBCardBody className="text-center">
              <MDBCardText className="projDis">
                An IMDB like app! find the movies you like here by searching
                using the name of the movie, name of the actor, or even by
                choosing the genre you prefere. and finally,, Chill!
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard>
            <h2>Movie Project</h2>
            <p>
              Technologies Used: <span>ReactJS, Bootstarp, CSS</span>
            </p>

            <a
              href="https://github.com/mohammad-jundi/e-commerce-mohammad-ray"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBCardImage
                className="proImg"
                style={{ height: "25rem" }}
                src={food2}
              />
            </a>
            <MDBCardBody className="text-center">
              <MDBCardText className="projDis">
                An IMDB like app! find the movies you like here by searching
                using the name of the movie, name of the actor, or even by
                choosing the genre you prefere. and finally,, Chill!
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};
export default Projects;
