// import { useState } from 'react'
import './styles/App.css'
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage.tsx";

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
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
