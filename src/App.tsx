import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import GamePage from './features/Game/pages/GamePage'
import RankPage from './features/Rank/pages/RankPage'
import GameLayout from './layouts/GameLayout'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<GameLayout />}>
          <Route path="/" element={<GamePage />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="/rank" element={<RankPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
