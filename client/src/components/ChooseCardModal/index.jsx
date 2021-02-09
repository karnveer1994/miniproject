import React, { useState } from "react";
import visa from "../../assests/VISA.png";
import greentick from "../../assests/green-check-icon.png";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";

function ChooseCardModal(props) {
  const [selectedCard, setSelectedCard] = useState(0);
  const creditCards = [
    "Visa credit card ending with 2345",
    "Visa credit card ending with 7645",
  ];

  const handleSubmit = () => {
    props.getProjectData();
  }

  return (
    <Modal centered {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title className='modalTitle' id="contained-modal-title-vcenter">
          Choose Card
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        {creditCards.map((item, index) => (
          <div key={index}>
            <Card
              border={selectedCard === index && "primary"}
              onClick={() => setSelectedCard(index)}
            >
              <Card.Body>
                <Row className='marginAuto'>
                  <Col className='marginAuto' sm={1}>
                    <Card.Img className={`checkCircle ${selectedCard === index ? 'show' : ''}`} variant="top" src={greentick} />
                  </Col>
                  <Col className='marginAuto' sm={3}>
                    <Card.Img className='visaCard' variant="top" src={visa} />
                  </Col>
                  <Col className='marginAuto' sm={8}>{item}</Col>
                </Row>
              </Card.Body>
            </Card>
            <br />
          </div>
        ))}
        <Card>
          <Card.Body>
            <Row>
              <Col sm={2}></Col>
              <Col sm={4}>+ Add card</Col>
              <Col sm={8}></Col>
            </Row>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer className='modalFooter'>
        <Button onClick={handleSubmit} variant='primary' size='lg' className='payButton'>Pay</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ChooseCardModal;
