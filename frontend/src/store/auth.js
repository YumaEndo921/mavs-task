export const state = () => ({
  token: null,
  username: null,
  id:null,
  memo:null,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setUsername(state, username) {
    state.username = username
  },
  setUserId(state, id) {
    state.id = id
  },
  setUserMemo(state, memo) {
    state.memo = memo
  },
  deleteUserMemo(state, index) {
    state.memo.splice(index,1)
  },
}