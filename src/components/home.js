import React from "react";
import Navbar from "./navBar.js";
import Cta from "./call.js"
import About from "./about.js";
import SimpleCarousel from './SimpleCarousel';
import Contact from "./contact.js";
import Footer from "./footer.js";
import Services from "./services.js";


function Home() {
return (
  <div>

<div>
<Navbar />
</div>

<div id="call">
  <Cta />
</div>

<div id="about">
  <About />
</div>

<div id="services">
<Services />
</div>

<div id="contact">
  <Contact />
</div>

<div id="footer">
  <Footer />
</div>

        </div>
        
    )
};

export default Home;