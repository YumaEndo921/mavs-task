<template>
    <div class="add">
        <h2 class="add__ttl">Memo Add</h2>
            <inputMemo class="add__input" />
            <!-- <button class="add__btn" type="submit">保存</button> -->
        <div class="add__box">
        <nuxt-link class="add__back"  to="/">戻る</nuxt-link>
        <!-- <p>{{ getToken }}</p> -->
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {


//   data() {
//     // return {
//     //   formValue: {
//     //     title: '',
//     //     content: '',
//     //   },
//     // }
//   },
  computed: {
   getToken () {
     return this.$store.state
   }
 },
//   methods: {
//     // 新規登録の送信処理
//     async submit() {
//       console.log('this.formValue', this.formValue)

//       // axiosで新規登録処理
//       // await this.$axios.post('新規登録用API', this.formValue)
//       const response = await this.$axios.post(
//         `${this.$config.apiBaseUrl}/articles/add`,
//          this.formValue)

//          console.log('サインアップAPI結果', response)

//       const responseCode = 200 // 404
//       if (responseCode === 200) {
//         // 成功

//         // トップにリダイレクト
//         this.$router.push('/')
//       } else {
//         // 失敗

//         // トースト表示
//         this.$toast.global.error({
//           message: '新規登録できませんでした。もう一度お試しください',
//         })
//       }
//     },
//   },
}
</script>


<style lang="scss" scoped>
.add{
    display: flex;
    flex-direction: column;
    align-items: center;
    &__ttl{
        margin-bottom: 62px;
        text-align: center;
        font-size: 64px;
    }

    &__input{
        // text-align: center;
        // margin: 0 auto;
        margin-bottom: 62px;
    }
    &__btn{
        text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 258px;
            height: 66px;
            margin-bottom: 64px;
            background: #8E8E8E;
            border: none;
            border-radius: 5px;
        }

    &__back{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 144px;
        height: 60px;
        margin-bottom: 350px;
        background: #D9D9D9;
        border-radius: 5px;
    }
}

</style>