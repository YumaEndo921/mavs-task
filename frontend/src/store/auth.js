export const state = () => ({
  token: null,
  username: null,
  id:null,
  memo:null,
  delete_memo:null,
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
  setDeleteMemo(state, delete_memo) {
    //初期化
    state.delete_memo = []
    delete_memo.forEach(element => {
      // console.log(`authのコンソールです:${element.deleted_at}`)
      if(element.deleted_at == null){
        console.log("if文をスキップします")
        return
      }
      else{
        console.log("配列を追加しました")
        console.log(element.deleted_at)
        state.delete_memo.push(element)
      }
    })
  },
  deleteUserMemo(state, index) {
    state.memo.splice(index,1)
  },
  setEdit(state, index) {
    state.edit_id = index
  },
  resetEdit(state) {
    state.edit_id = null
  },
  
  
}