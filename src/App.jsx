/* import './App.css' */
import './styles/main.scss'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import Breadcrumbs from './components/Breadcrumbs/breadcrumbs.jsx'
import Banner from './components/Banner/banner.jsx'
import { CartProvider } from './components/Context/cartcontext.jsx'; //NY




function App() {
  return (  
    <>

 <CartProvider>  
      <Header />
      <Banner />
      <Breadcrumbs />
      <Outlet />
      <Footer />
 </CartProvider> 

    </>
  )
}

export default App
