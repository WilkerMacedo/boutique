import React, { useState } from 'react';
import '../SimpleCarousel.css'; // Always make sure to create this CSS file for styling
import camisa1 from '../Assets/men/camisa (1).jpg';
import camisa2 from '../Assets/men/camisa (2).jpg';
import camisa3 from '../Assets/men/camisa (3).jpg';
import camisa4 from '../Assets/men/camisa (4).jpg';
import camisa5 from '../Assets/men/camisa (5).jpg';
import camisa6 from '../Assets/men/camisa (6).jpg';
import camisa7 from '../Assets/men/camisa (7).jpg';
import camisa8 from '../Assets/men/camisa (8).jpg';

const images = [camisa1, camisa2, camisa3, camisa4, camisa5, camisa6, camisa7, camisa8];



const SimpleCarousel = () => {

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

<h1 className="subtitle2">✅ Moda masculina</h1>
<br></br>
<br></br>

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
          style={{width: "100%", maxWidth: "400px", height: "auto", flexShrink: 0}} 
          />
        ))}
      </div>
    </div>

    <button onClick={goToPrevious} className="left-arrow">Anterior</button>
    <button onClick={goToNext} className="right-arrow">Próximo</button>

    </div>

    
  );
};

export default SimpleCarousel;



