import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import BgImg from "../assets/beach.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={BgImg}
        title="Discover your World"
        text="Indulge your adventurous spirit"
        buttonText="Sign up"
        url="/"
        buttonClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
