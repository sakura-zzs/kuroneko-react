import { BASE_URL, TIME_OUT } from './request/config'

import KuronekoRequest from './request'
import { localCache } from '@/utils/cache'

const kuronekoRequest = new KuronekoRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token，config.headers.AUTHORIZATION Bearer token
      const token = localCache.getItem('token')
      config.headers.AUTHORIZATION = `Bearer ${token}`
      return config
    }
  }
})
const uploadRequest = new KuronekoRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token，config.headers.AUTHORIZATION Bearer token
      const token = localCache.getItem('token')
      config.headers = {
        'Content-Type': 'multipart/form-data',
        AUTHORIZATION: `Bearer ${token}`
      }

      return config
    }
  }
})
const gpsRequest = new KuronekoRequest({
  baseURL: '/mqtt',
  timeout: TIME_OUT
})
export default kuronekoRequest
export { uploadRequest, gpsRequest }
