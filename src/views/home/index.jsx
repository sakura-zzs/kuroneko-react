import { PureComponent } from "react"

// import homeStore from "@/store/home"
import { changeTestAction,fetchMomentList } from "@/store/modules/home"
//提供react-redux的connect将state和action映射到组件的props中
import { connect } from "react-redux"
import { fetchMomentDataAction } from "@/store/modules/article"

import { StyledTestWrapper,SkyBlueBtn } from "./style"

class Home extends PureComponent{
  constructor() {
    super()
    this.state = {
      fontSize:'20'
    }
  }
  // //在组件挂载时进行状态订阅
  // componentDidMount() {
  //   //状态变化时更新数据
  //   homeStore.subscribe(() => {
  //     const state = homeStore.getState()
  //     this.setState({
  //       test:state.test
  //     })
  //   })
  // }
  componentDidMount() {
    this.props.changeMomentList()
  }
  render() {
    const { test, changeTest, momentList, changeMomentData } = this.props
    const {fontSize}=this.state
    return (
      <>
        {/* 传递props，动态样式 */}
        <StyledTestWrapper fontSize={fontSize}>
        <h1>{test}</h1>
        <button className="tit-btn" onClick={() => changeTest('hello')}>改变标题</button>
        <button className="id-btn" onClick={() => changeMomentData(2)}>根据id获取动态</button>
        </StyledTestWrapper>
        <SkyBlueBtn>天蓝色按钮</SkyBlueBtn>
        <ul>
        {
          momentList&&momentList.map(e => 
            <li key={e.id}>{e.title}</li>
          )
        }
        </ul>
      </>
    )
  }
}

//connect接收俩个函数,它返回一个高阶函数，将组件传入其中，就会返回一个注入好props的组件
//第一个函数接收state，将state映射到组件的props中,它返回的对象最终会以展开运算符的形式和组件原本的props一起注入到connect返回的高阶组件中
const mapStateToProps = (state) => ({
  test: state.home.test,
  momentList:state.home.momentList
})
//第二个函数接收dispatch，将通过dispatch触发action更新state的函数映射到组件的props中
const mapDispatchToProps = (dispatch) => ({
  changeTest(test){
    dispatch(changeTestAction(test))
  },
  changeMomentList() {
    //派发函数进行网络请求
    dispatch(fetchMomentList())
  },
  changeMomentData(id) {
    dispatch(fetchMomentDataAction(id))
  }
})

//返回connect注入好的组件
export default connect(mapStateToProps,mapDispatchToProps)(Home)