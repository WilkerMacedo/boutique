import React, { useRef } from "react";
import logotitle from '../Assets/logo/logotitle.png';

function Cta() {
    return(
        <div id="home">
        <div className="home-text-section">
        <img src={logotitle}  id="logo" alt="Main logo" />
                <h4 className="primary-heading">Os melhores looks você vai encontrar aqui! ❤️ - ❤️ - ❤️</h4>
                
                <a className="fake-button" href="#contact">Venha nos conhecer!</a>

            </div>
                </div>
    )
};

export default Cta;