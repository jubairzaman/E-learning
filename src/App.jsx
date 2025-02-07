import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router'
import Home from './components/home/Home'
import Courses from './components/courses/Courses'
import Support from './components/support/Support'
import Careers from './components/careers/Careers'
import Navbar1 from './components/navbar/Navbar1';
import ContactUs from './components/contactUs/ContactUs';



function App() {
  

  return (
    <>

    <Navbar1/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/support" element={<Support />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contactus" element={<ContactUs/>} />
    </Routes>
    </>
  )
}

export default App
