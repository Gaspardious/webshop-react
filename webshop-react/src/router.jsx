
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import About from './views/about';
import Error from './views/error';
import Products from "./views/Products/products";


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