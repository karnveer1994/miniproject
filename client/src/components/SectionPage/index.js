import React from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import calendar from '../../assests/calendar.png';
import folder from '../../assests/folder.jpg';

function SectionPage(props) {
  return (
    <Container>
      <Row className='rowPadding'>
        <Col>

          <Card
          >
            <Card.Body style={{padding: 0}}>
              {
                props.results.map(p => {
                  const cleverXfee = (p.cost*20)/100
                  const total = p.cost + cleverXfee
                  const date = new Date(p.date)
                  const today = new Date()
                  const diffTime = Math.abs(date - today);
                  const days = Math.ceil(diffTime / (1000 * 3600 * 24)); 
                  
                  return (
                    <div className='sectionContainer'>
                      <Row className='rowPadding bgGray'>
                        <Col className='sectionTitle'>{p.name}</Col>
                        <Col>
                          <div className='alignRight'>
                            <span className='sectionCost'>
                              ${p.cost}
                            </span>
                            <br/>
                            <span className='smallFont'>Total: ${total}</span><br/>
                            <span className='smallFont'>(CleverX fee +20%) ${cleverXfee}</span>
                          </div>
                        </Col>
                      </Row>
                      <Row className='rowPadding'><Col className='sectionSummary'>{p.summary}</Col></Row>
                      <Row className='rowPadding'>
                        <Col sm={5}>
                          <Card.Img src={calendar} className='sectionImage' /> {days} day delivery
                        </Col>
                        <Col sm={4}>
                        <Card.Img src={folder} className='sectionImage' /> &nbsp; Attachment
                        </Col>
                        <Col sm={3}></Col>
                      </Row>
                      <Row className='rowPadding'>
                        <Col sm={{offset: 9}}>
                          <Button className='CancelButton' variant='primary'>Cancel</Button>
                        </Col>
                      </Row>
                    </div>
                  )
                })
              }
            </Card.Body>
          </Card>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  )
}

export default SectionPage;