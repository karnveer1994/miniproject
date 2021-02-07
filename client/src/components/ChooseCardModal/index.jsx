import React, { useState} from 'react';
import visa from '../../assests/VBM_COF.png';
import greentick from '../../assests/green-check-icon.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function ChooseCardModal(props) {

    const [selectedCard, setSelectedCardIndex] = useState(0)
    const cardData = ['Visa credit card ending with 2345', 'Visa credit card ending with 7645']

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose Card 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
      {cardData.map((item, index) => (
        <>
          <Card border={selectedCard === index && "primary"} onClick={() => setSelectedCardIndex(index)}>
            <Card.Body>
                <Row>
                    <Col sm={2}>
                    <Card.Img variant="top" src={greentick} />
                    </Col>
                    <Col sm={2}>
                    <Card.Img variant="top" src={visa} />
                    </Col>
                    <Col sm={8}>
                    {item}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        <br/>
        </>
      ))}
      <Card >
        <Card.Body>
          <Row>
            <Col sm={2}>
            </Col>
            <Col sm={4}>
                + Add card
            </Col>
            <Col sm={8}>
            </Col>
          </Row>
        </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

export default ChooseCardModal;