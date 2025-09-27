import { css } from '@emotion/react';

import type { SerializedStyles } from '@emotion/react';

type ThemeKey = 'scrollcontainer' | 'scrollbutton' | 'default' | 'scrollview' | 'scrollitem' | 'scrollimg' | 'slidercontainer' | 'slidertrack' | 'slideritem' | 'sliderimg' ;

export const themeStyles: Record<ThemeKey, SerializedStyles> = {

  scrollcontainer: css`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 100px;
    height: 300px;
  `,
  scrollbutton: css`
    font-size: 2rem;
    background: wheat;
    border: none;
    cursor: pointer;
    user-select: none;
    padding: 0 10px;

    height: 50%;
    display: flex;
    align-items: center;      /* 세로 중앙 */
    justify-content: center;  /* 가로 중앙 */
  `,
  scrollview: css`
    overflow-x: auto;
    display: flex;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    flex-grow: 1;
    gap: 10px;
      /* 스크롤바 숨기기 */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE 10+ */
    `,
  scrollitem: css`
    flex: 0 0 auto;
    width: 300px;      /* 정사각형 가로 크기 */
    height: 300px;     /* 정사각형 세로 크기 */
    overflow: hidden;  /* 이미지가 넘치면 잘라냄 */
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  `,
  scrollimg: css`
    width: 100%;
    height: 100%;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
    display: block;    /* 불필요한 여백 제거 */ 
  `,
  slidercontainer: css`
    overflow: hidden;
    width: 100%;
  
  `,
  slidertrack: css`
    display: flex;
    will-change: transform;
  `,
  slideritem:css`
    flex: 0 0 20%; /* 한 화면에 5개 */
  `,
  sliderimg:css`
    width: 90%;
    padding-bottom: 10%;
    padding-top: 10%;
    display: block;

    &:hover {
    transform: scale(1.1);
  }

  `,


  default: css`

  `,
};

// theme에 맞는 스타일만 반환하는 함수
export function getThemeStyle(theme: ThemeKey = 'default'): SerializedStyles {
  return themeStyles[theme];
}

