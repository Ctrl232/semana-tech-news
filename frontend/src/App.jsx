import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ArticleDetail from './pages/ArticleDetail'
import Admin from './pages/Admin'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias/:id" element={<ArticleDetail />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}