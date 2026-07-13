// import { useState } from 'react'
import './App.css'
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main className={"py-4"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
