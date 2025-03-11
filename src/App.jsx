import About from "./components/About";
import Booking from "./components/Booking";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Stories from "./components/Stories";
import Tours from "./components/Tours";

import "./sass/main.scss";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
      <Booking />
      <Footer />
    </>
  );
}

export default App;
