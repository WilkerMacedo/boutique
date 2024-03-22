import React, { useState } from 'react';
import '../SimpleCarousel.css'; // Always make sure to create this CSS file for styling
import mulher1 from '../Assets/women/mulher (1).jpg';
import mulher2 from '../Assets/women/mulher (2).jpg';
import mulher3 from '../Assets/women/mulher (3).jpg';
import mulher4 from '../Assets/women/mulher (4).jpg';
import mulher5 from '../Assets/women/mulher (5).jpg';
import mulher6 from '../Assets/women/mulher (6).jpg';
import mulher7 from '../Assets/women/mulher (7).jpg';
import mulher8 from '../Assets/women/mulher (8).jpg';

const images = [mulher1, mulher2, mulher3, mulher4, mulher5, mulher6, mulher7, mulher8];



const SimpleCarousel2 = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    
    <div className="carousel">

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<h1 className="subtitle2">✅ Moda feminina</h1>
<br></br>
<br></br>

      <button onClick={goToPrevious} className="left-arrow">Anterior</button>
      
      <div className="images-container" style={{overflow: 'hidden'}}>
      <div className="images" style={{
        display: 'flex',
        transition: 'transform 0.5s ease-in-out',
        transform: `translateX(-${currentIndex * 100}%)`
      }}>
        {images.map((image, index) => (
          <img key={index} 
          src={image} 
          alt={`Slide ${index}`} 
          style={{width: "100%", maxWidth: "400px", height: "auto", flexShrink: 0}} />
        ))}
      </div>
    </div>

      <button onClick={goToNext} className="right-arrow">Próximo</button>
    </div>
  );
};

export default SimpleCarousel2;



