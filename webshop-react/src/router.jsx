
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import About from './views/about';
import Error from './views/error';


const router = createBrowserRouter ([
{
  path: '/',
  element: <App />,
  errorElement: <Error />
},
{
  path: '/about',
  element: <About />
}
]);

export default router;