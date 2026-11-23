import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/Layout'
import HomePage from './pages/HomePage'
import CreationsPage from './pages/CreationsPage'
import AboutPage from './pages/AboutPage'
import CustomOrdersPage from './pages/CustomOrdersPage'
import HowItWorksPage from './pages/HowItWorksPage'

export default function AppRouter() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'
  return (
    <BrowserRouter basename={base}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creations" element={<CreationsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/custom-orders" element={<CustomOrdersPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
