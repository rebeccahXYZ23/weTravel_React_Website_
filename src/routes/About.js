import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/man.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="aboutUs"
        heroImg={AboutImg}
        title="About Us"
        buttonClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
