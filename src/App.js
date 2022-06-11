import React from 'react'
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import DashBoardWelcomePage from './components/dashboard/DashBoardWelcomePage'
import DashBoardPlanPage from './components/dashboard/DashBoardPlanPage'
import CreatingSavings from './components/dashboard/CreatingSavings'
import AmountAndDurationPage from './components/dashboard/AmountAndDurationPage'
import CheckEarliPage from './components/dashboard/CheckEarliPage'
import Register from './components/Register'
import Login from './components/Login'
import RegisterAndHeader from './components/RegisterAndHeader'
import LoginAndHeader from './components/LoginAndHeader'

const App = () => {
  return (
    <Router>
      <Routes>
         <Route exact path="/" element={<LandingPage/>}/>
         <Route  path="/dash" element={<DashBoardWelcomePage/>}/>
         <Route  path="/dash1" element={<DashBoardPlanPage/>}/>
         <Route  path="/dash2" element={<CreatingSavings/>}/>
         <Route  path="/dash3" element={<AmountAndDurationPage/>}/>
         <Route  path="/check" element={<CheckEarliPage/>}/>
         <Route  path="/register" element={<RegisterAndHeader/>}/>
         <Route  path="/login" element={<LoginAndHeader/>}/>

      </Routes>
    </Router>
  )
}

export default App
