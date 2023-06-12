<template>
  <div class="add">
    <h2 class="add__ttl">Memo Add</h2>
    <form class="add__form" @submit.prevent="submit">
      <InputTitle v-model="formValue.title" />
      <InputContent v-model="formValue.content" />
      <InputButton buttonName="保存" />
    </form>
    <div class="add__box">
      <nuxt-link class="add__back" to="/">戻る</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValue: {
        title: '',
        content: '',
        userId: '',
      },
    }
  },
  computed: {
    // トークンをstoreから取得
    getToken() {
      return this.$store.state.auth.token
    },
    // ログイン中のユーザーidをstoreから取得
    getUserId() {
      return this.$store.state.auth.id
    },
  },
  methods: {
    async submit() {
      //タイトルの入力確認
      if (this.formValue.title === '') {
        this.$toast.global.error({
          message: 'タイトルを入力してください。',
        })
        return
      }

      //ログイン中のuserIdをformValue格納
      this.formValue.userId = this.getUserId
      // バックエンドへAPIリクエスト
      const response = await this.$axios.post(
        `${this.$config.apiBaseUrl}/articles/add`,
        //入力された情報とユーザーidを渡す
        { params: this.formValue },
        //ヘッダーリクエストにトークン認証を渡す
        { headers: { Authorization: this.getToken } }
      )
      //バックエンドからのresを格納
      const responseCode = response.data.body
      if (responseCode === 200) {
        // 成功
        // トップにリダイレクト
        this.$router.push('/')
      } else {
        // 失敗
        // トースト表示
        this.$toast.global.error({
          message: '新規登録できませんでした。もう一度お試しください',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.add {
  @media screen and (max-width: 480px) {
    background-color: black;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  &__ttl {
    margin-bottom: 62px;
    text-align: center;
    font-size: 64px;
  }
  &__form {
    // width: 85%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__input {
    margin-bottom: 62px;
  }
  &__back {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 144px;
    height: 60px;
    margin-bottom: 350px;
    background: #d9d9d9;
    border-radius: 5px;
  }
}
</style>
