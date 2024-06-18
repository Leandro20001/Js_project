import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Employees from './routes/Employees.jsx'
import './index.css'
import Footer from './components/footer.jsx'
import{createBrowserRouter,RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/employees list',
    element:<Employees/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>,
)
