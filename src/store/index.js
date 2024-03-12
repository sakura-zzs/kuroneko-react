// import { createStore, applyMiddleware, compose, combineReducers } from "redux"

import homeReducer from "./modules/home";
import articleReducer from "./modules/article"
//使用react-thunk这个中间件使得dispatch能够派发一个函数，使得action能够进行异步处理网络请求,让redux来管理网络请求
// import { thunk } from "redux-thunk"

import { configureStore } from '@reduxjs/toolkit'

//使用combineReducers对多个reducer进行合并，实现模块化
//组件中使用时需要跟上模块名
// const reducer = combineReducers({
//   home: homeReducer
// })

//通过createStore创建store
//开启redux-devtools进行数据追踪
//只有浏览器安装了redux-devtools才能拿到__REDUX_DEVTOOLS_EXTENSION_COMPOSE__函数
//compose为默认值
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))


//通过configureStore创建store，新版本的redux推荐使用@reduxjs/toolkit这个工具来使用redux
//使用createStore会提示被废弃，实际上这个工具就是对redux的一个封装
//@reduxjs/toolkit集成了thunk相关功能
//configureStore有三个参数，第一个为reducer对象，它里面可以放多个reducer（模块化）
//第二个参数为middleware，可以使用中间件
//第三个参数为devTools，默认为true，已经开启了devTools
const store = configureStore({
  reducer: {
    home: homeReducer,
    article: articleReducer
  }
})


export default store

