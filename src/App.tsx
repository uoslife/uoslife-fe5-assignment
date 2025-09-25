import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import GamePage from './pages/Game/GamePage'
import RankPage from './pages/Rank/RankPage'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<GamePage />} />
          <Route path="/rank" element={<RankPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
