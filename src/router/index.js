import { useRoutes, Navigate } from 'react-router-dom'
import React from 'react'

//懒加载
const Home = React.lazy(() => import("@/views/home"))

//通过函数组件来让类组件使用useRoutes创建路由
const RoutesComponent = () => {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/home" />
    },
    {
      path: '/home',
      element: <Home />
    }
  ])
}

export default RoutesComponent