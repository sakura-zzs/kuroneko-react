class Cache {
  storage = null
  constructor(type) {
    this.storage = type === 'local' ? localStorage : sessionStorage
  }
  setItem(key, val) {
    if (val) {
      return this.storage.setItem(key, val)
    }
  }
  getItem(key) {
    return this.storage.getItem(key)
  }
  removeItem(key) {
    return this.storage.removeItem(key)
  }
  clear() {
    return this.storage.clear()
  }
}

const localCache = new Cache('local')
const sessionCache = new Cache('session')
export { localCache, sessionCache }
