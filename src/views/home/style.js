import styled from "styled-components"

const primaryColor = '#4dc4ff'
//styled-components的本质是通过函数创建出一个组件，这个组件会被添加一个不重复的类名，然后给这个类添加样式
//styled.xxx,xxx就是这个组件渲染的元素
//通过styled.xxx.attrs为样式组件的props属性设置默认值
export const StyledTestWrapper = styled.div.attrs(props => ({
  // 在这里设置tColor就是直接使用了props中的tColor
  //这里需要为props中的color设置默认值，就需要使用其他变量进行设置，否则就会出现color:props.color这样的循环引用
  tColor: props.color || '#cc52b3'
}))`
display: flex;
justify-content: center;
color:${props => props.tColor};
button{
  /* 使用ThemeProvider注入的主题样式 */
  background-color: ${props => props.theme.backgroundColor};
}
.tit-btn{
  color: ${primaryColor};
}
.id-btn{
  /* 使用样式组件的props */
  font-size: ${props => props.fontSize}px;
  color: pink;
}
`
//使用styled-components的继承语法进行公共样式抽取
const BaseButton = styled.button`
width: 100px;
height: 100px;
`
export const SkyBlueBtn = styled(BaseButton)`
background-color: skyblue;
`