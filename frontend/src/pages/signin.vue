<template>
  <div class="signin">
    <h2 class="signin__ttl">サインイン</h2>
    <ValidationObserver ref="obs" v-slot="{ handleSubmit }">
      <form class="form_main" @submit.prevent="handleSubmit(submit)">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|email"
          name="email"
        >
          <div class="-email">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="メールアドレス"
              :value="formValue.email"
              @input="formValue.email = $event.target.value"
            />
          </div>
          <div class="error">{{ errors[0] }}</div>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          name="password"
        >
          <div class="-password">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="パスワード"
              :value="formValue.password"
              @input="formValue.password = $event.target.value"
            />
          </div>
          <div class="error">{{ errors[0] }}</div>
        </ValidationProvider>
        <button
          class="-submit"
          type="submit"
          :disabled="!formValue.email || !formValue.password"
        >
          ログイン
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValue: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    // サインインの送信処理
    async submit() {
      const response = await this.$axios.$post(
        // `http://localhost:3001/auth/signin`, 
        `${this.$config.apiBaseUrl}/auth/signin`, 
        this.formValue                            
      )
      console.log('サインインAPI結果', response)

      // トークンの有無でログインできたか判断
      const hasToken = !!response.token
      
      if (hasToken) {
        // 成功

        // Vuexストアにユーザー情報保存
        this.$store.commit('auth/setToken', response.token)
        this.$store.commit('auth/setUsername', response.email)
        // Topにリダイレクト
        this.$router.push('/')
      } else {
        // 失敗

        // トースト表示
        this.$toast.global.error({
          message: 'メールアドレスまたはパスワードが間違っています',
        })
        // 入力項目リセット
        this.formValue = {
          email: '',
          password: '',
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.signin{
  text-align: center;
  &__ttl{
    padding-bottom: 104px;
    font-size: 64px;
    font-weight: normal;
  }
}
.-email{
  padding-bottom: 10px;
}
.-password{
  padding-bottom: 64px;
}
.-submit{
  width: 240px;
  height: 60px;
  font-size: 24px;
}
button{
  border: none;
}
input{
  width: 240px;
}

.error {
  color: #ff0000;
}
</style>
