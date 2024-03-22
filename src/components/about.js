import React from "react";
import short1 from '../Assets/shorts/short (1).png';
import short2 from '../Assets/shorts/short (2).png';
import short3 from '../Assets/shorts/short (3).png';

function About() {
    return(
    <div className="about-section-text-container">
    
    <h1 className="subtitle2">✅ Fornecedora oficial da loja @Store</h1>
    <p className="subtitle3">Nossa loja física está localizada na chegada de Praça João Pessoa, ao lado da loja Doce Boutique!</p>

    <div className="aboutpics">
    <img src={short1}  id="short1" alt="short1" />
    <img src={short2}  id="short2" alt="short2" />
    <img src={short3}  id="short3" alt="short3" />
    </div>
    


    <p className="subtitle3"> ☀️ Moda Primavera-Verão é aqui ☀️</p>
    

    <div className="about-buttons-container"> 
    <a className="fake-button" href="#contact">Fale conosco!</a>
    </div>

    </div>
    )
};

export default About;