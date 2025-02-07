
import Button from 'react-bootstrap/Button';
const SupportHero = () => {
    return (
        <div className="container-fluid vh-50 d-flex align-items-center justify-content-center bgcolor text-white position-relative overflow-hidden">

            <div className="container h-100 w-100 my-5 ">

                <h1 className="mt-5">Support Center</h1>
                <p className="mt-3 w-50">Here you can find answers to common questions regarding payment, courses, dashboard, and more. If you need further assistance, please contact us</p>
                <Button className=' my-4 border border-success bg-success rounded-pill'>Chat On Whatsapp</Button>
            </div>



            
            
        </div>
    );
};

export default SupportHero;