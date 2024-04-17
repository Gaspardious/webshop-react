
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import About from './pages/about';
import Error from './pages/error';
import Products from "./pages/Products/products";


const router = createBrowserRouter ([
{
  path: '/',
  element: <App />,
  errorElement: <Error />
},
{
  path: '/about',
  element: <About />
},
{
  path: '/products',
  element: <Products />
},
]);

export default router;