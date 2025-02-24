import { Col, Row,Button, Form } from "react-bootstrap";


const Contactdetails = () => {
    return (
        <div className="container my-5">

        <Row>
            <Col className="">

                <h3>Point Of Contact</h3>
                <h4> Uttara Office</h4>
                <p>House 19, Road 14, Sector 13,Uttara, Dhaka 1230 Bangladesh</p>
            </Col>
            <Col>

            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>আপনার নাম</Form.Label>
        <Form.Control type="Name" placeholder="আপনার পুরো নাম লিখুন" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ইমেইল</Form.Label>
        <Form.Control type="Name" placeholder="আপনার পুরো নাম লিখুন" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ফোন নম্বর</Form.Label>
        <Form.Control type="Name" placeholder="আপনার পুরো নাম লিখুন" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>মেসেজ</Form.Label>
        <Form.Control type="text" placeholder="আপনার মেসেজ টি লিখুন" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        পাঠিয়ে দিন
      </Button>
    </Form>
            </Col>
        </Row>
            
        </div>
    );
};

export default Contactdetails;