import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter
} from "react-router-dom";
import ErrorPage from './Error.jsx';
import TestPage from './components/testPage.jsx'
import Sidebar from './components/Sidebar.jsx';
import Test101 from './components/test101.jsx';
import Profile from './components/Profile.jsx';
import { ConfigProvider } from 'antd';
import thTH from 'antd/locale/th_TH';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/TestPage",
    element: <TestPage/>,
  },
// ส่วนของ path และ element เราสามารถเพิ่มมาอีกได้เรื่อย ๆ กรณีที่เรามีหลายเพจ
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ConfigProvider locale={thTH} theme={{ hashed: false }}>
    {/* <App /> */}
    </ConfigProvider>
    </BrowserRouter>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
