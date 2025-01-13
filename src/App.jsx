import { Route, Routes } from 'react-router'
import './App.css'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import DashboardPage from './Pages/DashboardPage'
import QuestionPage from './Pages/QuestionPage'
import LeaderBoardPage from './Pages/LeaderBoardPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/question' element={<QuestionPage />} />
      <Route path='/leaderboard' element={ <LeaderBoardPage/>} />
    </Routes>
  )
}

export default App
