// import React from 'react'
import "./Activities.css"
import bhushi from "../static/bhushi-dam1.jpg"
import canyon from "../static/Canyon-trek.png"
import della from "../static/Della.png"
import lohgad from "../static/lohagad.webp"


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";



function BasicExample() {
  return (
    <div className="container" id="cardid" align="center">
      <div >


        <Card.Body className="actimg" >
          <Card.Img variant="top" className="image" src={bhushi} height="200px" width="200px" />
          <Card.Title>Bhushi Dam</Card.Title>
          <Card.Text className="ct">
          The Bhushi Dam is a masonry dam on the Indrayani River in Lonavala, Maharashtra, India.
          </Card.Text>
          <Button className="btn" variant="dark" >Get Location</Button>
        </Card.Body>

      </div>


      <div>
        {/* <Card style={{ }}> */}

        <Card.Body className="actimg">
          <Card.Img variant="top" className="image" src={canyon} height="200px" width="200px" />
          <Card.Title >Canyon Trek</Card.Title>
          <Card.Text className="ct">
          Canyon Valley waterfalls is one of the most beautiful waterfalls in Sahyadri located between Lonavala and Khandala.
          </Card.Text>
          <Button className="btn" variant="dark">Get Location</Button>
        </Card.Body>
        {/* </Card> */}
      </div>

      <div >
        {/* <Card style={{ }}> */}

        <Card.Body className="actimg" >
          <Card.Img variant="top" className="image" src={della} height="200px" width="200px" />
          <Card.Title>Hotel Della</Card.Title>
          <Card.Text className="ct">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="btn" variant="dark">Get Location</Button>
        </Card.Body>
        {/* </Card> */}
      </div>

      <div >
        {/* <Card style={{ }}> */}

        <Card.Body className="actimg" >
          <Card.Img variant="top" className="image" src={lohgad} height="200px" width="200px" />
          <Card.Title>Lohagad-Fort</Card.Title>
          <Card.Text className="ct">
            Lohagad is one of famous hill of oune. Situated close to the hill station Lonavala and 52 km northwest of Pune, Lohagad rises to an elevation of 1,033 m above sea level.
          </Card.Text>
          <Button className="btn" variant="dark">Get Location</Button>
        </Card.Body>
        {/* </Card> */}
      </div>

    </div>
  );
}











export default BasicExample;