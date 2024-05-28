import Image from "next/image";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Diches from "./Components/Diches";
import About from "./Components/About";
import Order from "./Components/Order";
import Menu from "./Components/Menu";
import Section from "./Components/Section";
import Testimonial from "./Components/Testimonial";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Diches />
      <About />
      <Menu />
      <Section />
      <Order />
      <Testimonial  />
      <Form />
      <Footer />
    </div>
  );
}
