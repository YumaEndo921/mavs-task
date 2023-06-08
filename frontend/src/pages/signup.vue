<template>
  <div class="signup">
    <h2 class="signup__ttl">新規登録</h2>
    <ValidationObserver ref="obs" v-slot="{ handleSubmit }">
      <form class="form_main" @submit.prevent="handleSubmit(submit)">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          name="username"
        >
          <div class="-username">
            <input
              id="username"
              type="text"
              name="username"
              placeholder="ユーザー名"
              :value="formValue.username"
              @input="formValue.username = $event.target.value"
            />
          </div>
          <div class="error">{{ errors[0] }}</div>
        </ValidationProvider>
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
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|confirmed:password"
          name="passwordConfirm"
        >
          <div class="-passwordcheck">
            <input
              id="passwordConfirm"
              type="password"
              name="passwordConfirm"
              placeholder="パスワード確認用"
              :value="formValue.passwordConfirm"
              @input="formValue.passwordConfirm = $event.target.value"
            />
          </div>
          <div class="error">{{ errors[0] }}</div>
        </ValidationProvider>
        <button
          class="-submit"
          type="submit"
          :disabled="
            !formValue.username ||
            !formValue.email ||
            !formValue.password ||
            !formValue.passwordConfirm ||
            formValue.password !== formValue.passwordConfirm
          "
        >
          新規登録
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
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
      },
      user: {},
    }
  },
  methods: {
    // 新規登録の送信処理
    async submit() {
      console.log('this.formValue', this.formValue)

      // axiosで新規登録処理
      // await this.$axios.post('新規登録用API', this.formValue)
      const response = await this.$axios.post(
        `${this.$config.apiBaseUrl}/users/signup`,
         this.formValue)
        //  console.log('サインアップAPI結果', response)

      const responseCode = response.data.body
      if (responseCode === 200) {
        // 成功
        console.log("登録成功")
        // サインインページにリダイレクト
        this.$router.push('/signin')
      } else {
        // 失敗
        // トースト表示
        this.$toast.global.error({
          message: 'すでに登録されているメールアドレスです。',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.signup{
  text-align: center;
  &__ttl{
    padding-bottom: 64px;
    font-size: 64px;
    font-weight: normal;
  }
}
.-username{
  padding-bottom: 10px;
}
.-email{
  padding-bottom: 10px;
}
.-password{
  padding-bottom: 10px;
}
.-passwordcheck{
  margin-bottom: 10px;
}
.-submit{
  width: 240px;
  height: 60px;
  margin-top: 50px;
  font-size: 24px;
  border: none;
}
.error {
  margin-bottom: 10px;
  color: #ff0000;
}
input{
  width: 240px;
}
</style>
