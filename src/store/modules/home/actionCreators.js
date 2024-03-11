import { CHANGE_TEST, CHANGE_MOMENT_LIST } from "./constants"
import kuronekoRequest from "@/services"

//创建action,通过派发action修改state

export const changeTestAction = (test) => (
  { type: CHANGE_TEST, test }
)
const changeMomentListAction = (momentList) => ({
  type: CHANGE_MOMENT_LIST, momentList
})
//react-thunk使得dispatch能够派发一个函数，并执行
//这个函数还会接收俩个参数，dispatch函数和getState函数，用以派发action修改state和获取修改前state的状态
export const fetchMomentList = () => {
  return function (dispatch, getState) {
    kuronekoRequest.get({ url: '/moment' }).then(res => {
      dispatch(changeMomentListAction(res.data))
    })
  }
}

