import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import Breadcrumbs from './components/Breadcrumbs/breadcrumbs.jsx'
import Banner from './components/Banner/banner.jsx'




function App() {
  return (  
    <>
      <Header />
      <Banner />
      <Breadcrumbs />
      <Outlet />

      <Footer />
    </>
  )
}

export default App
