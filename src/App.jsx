import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
    <Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/' />} />
    <Route path='/:username' element={<ProfilePage />} />
  </Routes>
    </>
  )
}

export default App
