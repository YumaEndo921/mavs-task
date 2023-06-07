export const state = () => ({
  token: null,
  username: null,
  id:null,
  memo:null,
  edit_id:null,
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
  setEdit(state, index) {
    state.edit_id = index
    console.log(`メモの配列番号を取得${state.edit_id}`)
  },
  resetEdit(state) {
    state.edit_id = null
  },
  
  
}