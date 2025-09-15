import { useEffect, useRef } from 'react';
import './Slider.css';

const images: string[] = ['pocketmon/Charmander.png', 'pocketmon/Charmeleon.png', 'pocketmon/Charizard.png', 'pocketmon/Mega_Charizard_X.png', 'pocketmon/Mega_Charizard_Y.png'];

function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const position = useRef<number>(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const speed: number = 3.0; // 픽셀 per frame (속도)

    const animate = () => {
      position.current -= speed;
      if (Math.abs(position.current) >= slider.scrollWidth / 2) {
        position.current = 0;
      }
      slider.style.transform = `translateX(${position.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // 이미지 배열을 2배로 늘려 무한 슬라이더처럼 보이게 합니다.
  const repeatedImages: string[] = [...images, ...images];

  return (
    <div className="slider-container">
      <div className="slider-track" ref={sliderRef}>
        {repeatedImages.map((img, index) => (
          <div className="slider-item" key={index}>
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;