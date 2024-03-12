import kuronekoRequest from "@/services"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


//@reduxjs/toolkit已经集成了thunk相关功能--createAsyncThunk
//通过createAsyncThunk来创建异步action
//当异步action被dispatch派发时会存在三种状态
//pending：还没有返回结果
//fulfilled：异步action有return结果
//rejected：执行异常/抛出错误
//createAsyncThunk有俩个参数
//第一个为事件类型（name），为了能够在devTools中显示dispatch触发了这个action
//一般设置为动词/actionName，比如fetchHomeData=>fetch/homeData
//第二个参数为一个异步函数，这个函数接收俩个参数
//第一个为dispatch传入的参数--extraInfo
//第二个为store实例，通过它可以使用dispatch来触发action，使用getState获取数据状态
export const fetchMomentDataAction = createAsyncThunk('fetch/momentData', async (id, { dispatch, getState }) => {
  const res = await kuronekoRequest.get({ url: `/moment/${id}` })
  dispatch(changeMomentDataAction(res.data))
  return res.data
})


//通过createSlice创建reducer和action
//这个函数接收一个对象
//第一个参数，name是对createSlice创建的slice的一个标记，它会显示在redux-devtools中
//且通过createSlice创建reducer是不需要手动匹配actionType的，它会自动生成和匹配actionType
//actionType是以name/actionName为基准生成的
//第二个参数initialState用来初始化state
//第三个参数reducers,定义action，不需要定义actionType，会自动匹配
//reducers中的action函数有俩个参数，state和action，action中包含actionType和payload，payload中就是组件中通过dispatch调用action传递的参数
//createSlice返回一个对象，里面包含reducer和actions，actions包含所有的action函数，

const articleSlice = createSlice({
  name: 'article',
  initialState: {
    test: 'article',
    momentData: {}
  },
  reducers: {
    changeTestAction(state, { payload }) {
      //可以直接这样赋值也会触发state更新的原因是RTK内部生成了一个新的state，从而通过shallowEqual进行更新
      state.test = payload
    },
    changeMomentDataAction(state, { payload }) {
      state.momentData = payload
    }
  },//通过extraReducers可以监听异步action的三种状态
  //对象写法监听已经被废弃了，需要使用addCase进行监听
  //通过addCase链式监听
  extraReducers: (builder) => {
    builder.addCase(fetchMomentDataAction.pending, (state, action) => {
      console.log('pending', action)
    }).addCase(fetchMomentDataAction.fulfilled, (state, { payload }) => {
      console.log('fulfilled', payload)
    }).addCase(fetchMomentDataAction.rejected, (state, action) => {
      console.log('rejected', action)
    })
  }
})

//将slice返回对象中的reducer和actions导出
export const { changeTestAction, changeMomentDataAction } = articleSlice.actions
export default articleSlice.reducer