import React from "react";
import face from '../Assets/social/face.png';
import zap from '../Assets/social/zap.png';
import insta from '../Assets/social/telegram.png';

function Contact() {
    return(
    <div>

<h1 className="subtitle2">Entre em contato conosco!</h1>
<p className="subtitle">Acesse nossas redes sociais e veja o que está em destaque!</p>
    <br></br>

    <div className="zap">
    <img src={zap}  id="zap" alt="zap" />
    <h1>22 99862-8281</h1>
    </div>
    
    <div className="face">
    <img src={face}  id="face" alt="face" />
    <h1>Bridyan Macedo  (Loja Doce Boutique)</h1>
    <h4>https://www.facebook.com/profile.php?id=100041244350247</h4>
    </div>
    
    <div className="insta">
    <img src={insta}  id="insta" alt="insta" />
    <h1>@doceboutique.bw</h1>

    </div>
    
    <br></br>
    
    <p  className="subtitle">Funcionamento de segunda a sábado, 
Das 09:00 as 18:00 horas</p>

<h3 className="subtitle2">💖 Venha montar seu look na Doce Boutique ❤️</h3>
<p className="subtitle"> ✅Praça João Pessoa, São Francisco de Itabapoana/RJ</p>
    </div>
    )
};

export default Contact;