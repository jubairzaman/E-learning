import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay,faLandmark, faTableColumns,faGraduationCap,faCartShopping,faCreditCard,faChartGantt,faTv} from '@fortawesome/free-solid-svg-icons';

const cardData = [
    { icon: faCalendarDay, description: 'Community Events', link: '/card1' },
    { icon: faLandmark, description: 'Courses', link: '/card2' },
    { icon: faTableColumns, description: 'Deshboard', link: '/card3' },
    { icon: faGraduationCap, description: 'Online Class', link: '/card4' },
    { icon: faCartShopping, description: 'Order', link: '/card5' },
    { icon: faCreditCard, description: 'Payment Mathods', link: '/card6' },
    { icon: faChartGantt, description: 'Refund Process', link: '/card7' },
    { icon: faTv, description: 'Refund Process', link: '/card8' }
  ];

const PositionCard = () => {
    return (
        <Container className='my-5'>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card style={{ width: '100%', cursor: 'pointer' }} onClick={() => window.location.href = card.link}>
              <Card.Body>
                <FontAwesomeIcon icon={card.icon} size="2x" />
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    );
};

export default PositionCard;