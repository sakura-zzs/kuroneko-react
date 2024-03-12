import React from "react"
//配置路由规则
import RoutesComponent from "./router"

//使用styled-components的ThemeProvider进行主题样式注入
//被ThemeProvider包裹的组件中的样式组件可以通过props.theme.xxx拿到注入的样式
import { ThemeProvider } from "styled-components"

export default class App extends React.PureComponent{
  render() {
    return(
      <div className="app">
        <div className="page">
          <ThemeProvider theme={{ backgroundColor: "#14ba73" }}>
          <RoutesComponent />
          </ThemeProvider>
        </div>
      </div>
    )
  }
}