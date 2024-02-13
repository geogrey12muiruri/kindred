import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar"
import Home from "./components/home/Home"
import Login from "./components/login/Login";
import Register from "./components/register/Register";
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Login />
          <Register />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
