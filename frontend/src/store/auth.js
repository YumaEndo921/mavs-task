export const state = () => ({
  token: null,
  username: null,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setUsername(state, username) {
    state.username = username
  },
}
export const getters = {
  hoge: state => {
    return state.token
  },
 }
