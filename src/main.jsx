import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

//páginas
import Categorias from "./routes/Categorias";
import NewProduct from './routes/NewProduct';
import Notebooks from './routes/Notebooks';
import Perifericos from './routes/Perifericos';
import Smartphones from './routes/Smartphones';
import EditarProduto from './routes/EditarProduto';




import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path: "/",
        element: <Categorias />
      },
      {
        path: "/new",
        element: <NewProduct />
      },
      {
        path: "/notebooks",
        element: <Notebooks />
      },
      {
        path: "/perifericos",
        element: <Perifericos />
      },
      {
        path: "/smartphones",
        element: <Smartphones />
      },
      {
        path: "/EditarProduto/:id",
        element: <EditarProduto />
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
