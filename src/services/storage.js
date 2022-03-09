const Storage = {}

Storage.set = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

Storage.get = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

Storage.remove = (key) => {
  localStorage.removeItem(key)
}

Storage.clear = () => {
  localStorage.clear()
}

export default Storage
