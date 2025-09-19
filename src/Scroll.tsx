/** @jsxImportSource @emotion/react */

import { useRef } from 'react';
import { getThemeStyle } from './theme';

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
    <div css = {getThemeStyle('scrollcontainer')}>
      <button css = {getThemeStyle('scrollbutton')} onClick={scrollToStart} aria-label="왼쪽 끝으로 이동">{'<'}</button>
      <div css = {getThemeStyle('scrollview')} ref={scrollRef}>
        {images.map((src, idx) => (
          <div css = {getThemeStyle('scrollitem')} key={idx}>
            <img  css = {getThemeStyle('scrollimg')} 
            src={src} alt={`number-${idx + 1}`} draggable={false} />
          </div>
        ))}
      </div>
      <button css = {getThemeStyle('scrollbutton')} onClick={scrollToEnd} aria-label="오른쪽 끝으로 이동">{'>'}</button>
    </div>
  );
}


export default Scroll;
