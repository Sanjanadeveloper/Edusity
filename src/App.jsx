import { useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonial from "./Components/Testimonials/Testimonial";
import Title from "./Components/Title/Title";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

function App() {
  const [playState, setPlayState] = useState(false)
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subtitle='Gallery' title='Campus Photos' />
        <Campus/>
        <Title subtitle='TESTIMONIALs' title='What Students Says'/>
        <Testimonial/>
        <Title subtitle='Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
}

export default App;
