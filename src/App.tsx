import './App.css'
import bgImage from './assets/bg.jpg'

import { Header } from './components/layout/Header'
import { HomeBanner } from './components/sections/HomeBanner'
import { InfiniteBanner } from './components/sections/InfiniteBanner'
import { ScrollBanner } from './components/sections/ScrollBanner'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <HomeBanner bgImage={bgImage} />
        <InfiniteBanner />
        <ScrollBanner />
      </main>
    </div>
  )
}

export default App
