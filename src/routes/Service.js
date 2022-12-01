import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Services() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        title="Services"
        heroImg="https://images.unsplash.com/photo-1605449535614-389323fda36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
        buttonClass="hide"
      />

      <Trip />
      <Footer />
    </>
  );
}
export default Services;
