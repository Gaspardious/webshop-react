
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from './pages/About/about';
import Error from './pages/Error/error';
import Products from "./pages/Products/products";
import ProductPage from "./pages/ProductPage/productpage";
import Homepage from "./pages/Homepage/homepage";
import Contact from "./pages/Contact/contact";
import Checkout from "./pages/Checkout/checkout";




const router = createBrowserRouter ([
{
  path: '/',
  element: <App />,
  errorElement: <Error />,
  children: [
  { path: '/', element: <Homepage />, index: true },
  { path: 'about', element: <About /> },
  { path: 'products', element: <Products /> },
  { path: 'contact', element: <Contact /> },
  { path: 'product/:id', element: <ProductPage />},
  { path: 'checkout', element: <Checkout />},
]
},
]);

export default router;