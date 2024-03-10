import React from "react"
//配置路由规则
import RoutesComponent from "./router"
export default class App extends React.PureComponent{
  render() {
    return(
      <div className="app">
        <div className="page">
          <RoutesComponent />
        </div>
      </div>
    )
  }
}