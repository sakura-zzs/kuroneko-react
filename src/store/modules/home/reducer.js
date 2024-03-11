import { CHANGE_TEST, CHANGE_MOMENT_LIST } from "./constants"


//初始化state
const initialState = {
  test: 'test',
  momentList: []
}

//创建reducer

const homeReducer = (state = initialState, action) => {
  //匹配action
  switch (action.type) {
    case CHANGE_TEST:
      //redux在更新state时，也会对新旧state进行浅层比较，所以需要浅拷贝出一个不同地址的state
      //相同的属性会覆盖state中的
      return { ...state, test: action.test }
    case CHANGE_MOMENT_LIST:
      return { ...state, momentList: action.momentList }
    default:
      return state
  }
}

export default homeReducer