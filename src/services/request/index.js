import axios from 'axios'
class KuronekoRequest {
  instance
  interceptors
  constructor(config) {
    this.instance = axios.create(config)
    if (config.interceptors) {
      this.interceptors = config.interceptors
      this.instance.interceptors.request.use(this.interceptors.requestInterceptor)
    }
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get(config) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
  patch(config) {
    return this.request({ ...config, method: 'PATCH' })
  }
  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default KuronekoRequest
