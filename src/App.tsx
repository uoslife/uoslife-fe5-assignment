/** @jsxImportSource @emotion/react */

import { getThemeStyle } from './theme';
import { useState } from 'react'
import Logo from './assets/app_icon.png'
import Slider from './Slider';
import Header from './Header';
import Scroll from './Scroll';

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <Header></Header>
    <main>
      <article css = {getThemeStyle('topcontent')}>
        <img src="./sky_img.png" css = {getThemeStyle('background')} draggable="false"/>
            <h1 css = {getThemeStyle('toptext')}>시대생 프론트 아자아자💪</h1>
            <a css = {getThemeStyle('toplink')}  href="https://www.uoslife.team/">바로가기</a>
      </article>

      <section>
        <img src={Logo} css = {getThemeStyle('logo')} alt="app logo" />
        <h1>5기 프론트 시대생 onboarding ✈️</h1>      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </section>

      <section style={{ textAlign: 'left' }}>
        <h1>무한배너 section</h1>
        <Slider/>
        <h1>스크롤뷰 zone</h1>
        <Scroll/>
      </section>
    </main>  
    </>
  )
}

export default App
