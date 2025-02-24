import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const cardData = [
    { title:"English Instructor for Kids", description: 'Remote (online)',Salary: 'Negotiable', link: '/card1' },
    { title:"Online Consultant ", description: 'Remote (online)',Salary: 'Negotiable', link: '/card2' },
    { title:"Executive, Operations", description: 'Remote (online)',Salary: 'Negotiable', link: '/card3' },
    { title:"Executive, TeleSales", description: 'Remote (online)',Salary: 'Negotiable', link: '/card4' },
    { title:"Creative Designer", description: 'Remote (online)',Salary: 'Negotiable', link: '/card5' },
    { title:"Video Editor", description: 'Remote (online)',Salary: 'Negotiable', link: '/card6' },
    
  ];

const PositionCard = () => {
    return (
        <Container className='my-5'>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card style={{ width: '100%', cursor: 'pointer' }} onClick={() => window.location.href = card.link}>
              <Card.Body> 

              <div className='d-flex justify-content-center border bg-success text-white w-25 rounded my-2 '>Live</div>
                <Card.Title>{card.title}</Card.Title>
                  
                <Card.Text>Job Type: {card.description}</Card.Text>
                <Card.Text>Salary: {card.Salary}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    );
};

export default PositionCard;