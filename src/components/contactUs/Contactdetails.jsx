import { Col, Row,Button, Form } from "react-bootstrap";


const Contactdetails = () => {
    return (
        <div className="container my-5">

        <Row className="row gy-5">
            <Col className="col-md-6 col-12">

                <h3>যোগাযোগের ঠিকানা</h3>
                <h4>উত্তরা অফিস</h4>
                <p>বাড়ি নম্বর ১৯, রোড নম্বর ১৪, সেক্টর ১৩ ,উত্তরা , ঢাকা ১২৩০, বাংলাদেশ</p>
            </Col>
            <Col className="col-md-6 col-12">

            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">

      <h2 >নিচের তথ্য গুলো দিয়ে পাঠিয়ে দিন</h2>
        <Form.Label className="mt-4">আপনার নাম</Form.Label>
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