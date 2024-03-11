let BASE_URL = ''
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else {
  BASE_URL = 'http://localhost:8001'
}
export const TIME_OUT = 10000
export { BASE_URL }
