import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Col, Button } from 'react-bootstrap';
import { motion } from "framer-motion";
import {useNavigate} from "react-router"

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bgcolor text-white position-relative overflow-hidden">
            <Container>

                <div className='d-flex justify-content-center align-item-center'>

                <Button  variant="outline-secondary">New: English for Freelancers - launched 🚀</Button>
                </div>

            



                <Row>

                    <Col className=' d-flex justify-content-center align-items-center position-relative'>

                    <div>

                        <h1  className='ador-b herofont'>সহজ শিখন</h1>
                        <h1 className='ador-b herofont'>স্মার্ট ভবিষ্যৎ</h1>

                        <p className='ador'>সব বয়সীদের উপযোগী ইংলিশ কোর্সের সাথে</p>
                        <Button onClick={() => navigate("/courses")} className='buttoncolor'>আমাদের কোর্সগুলো দেখুন</Button>
                    </div>

                    
                    
                    
                    </Col>
                    <Col className="col-12  col-md-6 d-flex justify-content-center align-items-center position-relative">

                    <div className='mt-5' >
                    <motion.img
                        src="https://i.ibb.co.com/v6kr19qQ/7746764.webp" // Replace with your robot image URL
                        alt="Flying Robot"
                        className="img-fluid w-75 w-md-50 h-auto"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                </div>
                    
                    </Col>
                </Row>
            </Container>
            









                {/* Animated Robot
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center position-relative">
                    <motion.img
                        src="https://i.ibb.co.com/v6kr19qQ/7746764.webp" // Replace with your robot image URL
                        alt="Flying Robot"
                        className="img-fluid w-75 w-md-50 h-auto"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                </div> */}
            </div>
      
    );
};

export default Home;
