import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        title="Contact Us"
        heroImg="https://images.unsplash.com/photo-1611944594578-da0972746722?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        buttonClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
