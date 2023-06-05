<template>
   <div class="input">
        <form class="input__form" @submit.prevent="submit()">
            <input 
                class="input__form--ttl" 
                type="text" 
                placeholder="タイトル"
                :value="formValue.title"
                @input="formValue.title = $event.target.value">
            <textarea 
                class="input__form--txt" 
                name="" 
                id="" 
                cols="30" 
                rows="10"
                :value="formValue.text"
                @input="formValue.text = $event.target.value">
            </textarea>
            <button class="add__btn" type="submit">保存</button>
        </form>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      formValue: {
        title: '',
        content: '',
      },
    }
  },
  methods: {
    // 新規メモ登録の送信処理
    async submit() {
      console.log('this.formValue', this.formValue)

      // axiosで新規登録処理
      const response = await this.$axios.post(
        `${this.$config.apiBaseUrl}/articles/add`,
        { headers: { Authorization: "JWT " + mutations.token } }, //追記
         this.formValue)

         console.log('サインアップAPI結果', response)

    //   const responseCode = 200 // 404
    //   if (responseCode === 200) {
    //     // 成功

    //     // トップにリダイレクト
    //     this.$router.push('/')
    //   } else {
    //     // 失敗

    //     // トースト表示
    //     this.$toast.global.error({
    //       message: '新規登録できませんでした。もう一度お試しください',
    //     })
    //   }
    },
  },
}
</script>

<style lang="scss" scoped>

.input{
    // margin: 0 15%;
    &__form{
        display: flex;
        flex-direction: column;
        // justify-content: start;
        align-items: start;
        
        &--ttl{
            width: 387px;
            height: 66px;
            margin-bottom: 53px;
            padding-left: 20px;
            font-size: 24px;
        }
        &--txt{
            width: 1025px;
            height: 276px;
            margin-bottom: 34px;
            padding-top: 20px;
            padding-left: 20px;
        }
    }

}


</style>