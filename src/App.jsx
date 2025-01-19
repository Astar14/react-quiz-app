import { Route, Routes } from 'react-router'
import './App.css'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import DashboardPage from './Pages/DashboardPage'
import QuestionPage from './Pages/QuestionPage'
import LeaderBoardPage from './Pages/LeaderBoardPage'
import AdminLogin from './admin/AdminLogin'
import AdminDashboard from './admin/AdminDashboard'
import UsersInformation from './admin/UsersInformation'
import TestDetails from './admin/TestDetails'
import FullTestDetails from './admin/FullTestDetails'
import Quizzes from "./admin/Quizzes"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/question' element={<QuestionPage />} />
      <Route path='/leaderboard' element={<LeaderBoardPage />} />
      <Route path='/adminlogin' element={<AdminLogin />} />
      <Route path='/admindashboard' element={<AdminDashboard />} />
      <Route path='/quizzes' element={<Quizzes />} />
      <Route path='/userinfo' element={<UsersInformation />} />
      <Route path='/testdetails/:id' element={<TestDetails />} />
      <Route path='/fulltestdetails/:id/:testIndex' element={<FullTestDetails />} />
    </Routes>
  )
}

export default App
