import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './App.css'
import backgroundImage from './assets/background.jpg'

function App() {

  return (
    <>
      <Header/>
      <div className="background-banner">
        <img src={backgroundImage} alt="Background" />
      </div>
      <Footer/>
    </>
  )
}

export default App;
