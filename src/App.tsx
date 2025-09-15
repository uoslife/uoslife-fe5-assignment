import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { useState } from 'react'
import Logo from './assets/app_icon.png'
import './App.css'
import Slider from './Slider';
import Header from './Header';
import Scroll from './Scroll';

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <header><Header></Header></header>
    <main>
      <article className="topcontent">
        <img src="./sky_img.png" id='background' draggable="false"/>
            <h1 id='top-text'>시대생 프론트 아자아자💪</h1>
            <a id='top-link' href="https://www.uoslife.team/">바로가기</a>
      </article>

      <section>
        <img src={Logo} className="logo" alt="app logo" />
        <h1>5기 프론트 시대생 onboarding ✈️</h1>      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </section>

      <section className="card">
        <h1>무한배너 section</h1>
        <Slider></Slider>
        <h1>스크롤뷰 zone</h1>
        <Scroll></Scroll>
      </section>
    </main>  
    </>
  )
}

export default App
