
export default function ({ $axios, redirect, store }) {
  $axios.onRequest(config => {
    const token = store.getters['auth/getAccessToken']
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, (err) => {
    return Promise.reject(err)
  })

  $axios.onError(async error => {
    const originalRequest = error.config
    if (
      (error.response.status === 401 &&
      error.response.statusText === 'Unauthorized') &&
      !originalRequest._retry) {
      originalRequest._retry = true
      await store.dispatch('auth/refreshToken')
      const token = store.getters['auth/getAccessToken']
      error.config.headers.Authorization = `Bearer ${token}`
      return $axios(originalRequest)
    }
    if (error.response.status === 403 && error.response.statusText === 'Forbidden') {
      await store.dispatch('auth/logout')
      redirect('/')
    }
    return Promise.reject(error)
  })
}
