export default async function ({ $auth, store }) {

  const user = await $auth.$get('/user', {
    withCredentials: true
  })

  if (user) {
    store.dispatch('auth/getUser', user)
  } else {
    //
  }

}