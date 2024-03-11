import { createStore, applyMiddleware, compose, combineReducers } from "redux"

import homeReducer from "./modules/home";
//使用react-thunk这个中间件使得dispatch能够派发一个函数，使得action能够进行异步处理网络请求,让redux来管理网络请求
import { thunk } from "redux-thunk"

//使用combineReducers对多个reducer进行合并，实现模块化
//组件中使用时需要跟上模块名
const reducer = combineReducers({
  home: homeReducer
})

//通过createStore创建store
//开启redux-devtools进行数据追踪
//只有浏览器安装了redux-devtools才能拿到__REDUX_DEVTOOLS_EXTENSION_COMPOSE__函数
//compose为默认值
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store

