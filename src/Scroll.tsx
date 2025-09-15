import { useRef } from 'react';
import './Scroll.css';

const images = [
  'number/1.png', 'number/2.png', 'number/3.png', 'number/4.png', 'number/5.png',
  'number/6.png', 'number/7.png', 'number/8.png', 'number/9.png', 'number/10.png'
];

function Scroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToStart = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scrollToEnd = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-container">
      <button className="scroll-btn left" onClick={scrollToStart} aria-label="왼쪽 끝으로 이동">{'<'}</button>
      <div className="scroll-view" ref={scrollRef}>
        {images.map((src, idx) => (
          <div className="scroll-item" key={idx}>
            <img src={src} alt={`number-${idx + 1}`} draggable={false} />
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={scrollToEnd} aria-label="오른쪽 끝으로 이동">{'>'}</button>
    </div>
  );
}

export default Scroll;
