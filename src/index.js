import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import React, { Suspense } from 'react'
//通过react-redux的Provider给组件提供store
import { Provider } from 'react-redux'
import store from './store'
//根组件
import App from './App'
import 'normalize.css'
import './assets/css/index.less'
//挂载
const root = createRoot(document.querySelector('#root'))
//开启严格模式，由于使用了路由懒加载，还需要使用suspence组件进行包裹，防止因为异步组件单独打包单独加载的原因，异步组件没有及时渲染时使用fallback进行占位
//路由模式使用历史模式
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
) 