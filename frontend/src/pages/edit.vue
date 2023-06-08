<template>
    <div class="edit">
        <h2 class="edit__ttl">Memo Edit</h2>
        <!-- <inputMemo send="更新" class="edit__input" /> -->
        <div class="input">
        <!-- <p >{{ formValue }}</p> -->
        <form class="input__form" @submit.prevent="updateEdit()">
            <div class="input__form--box">
                <input 
                class="input__form--ttl" 
                type="text" 
                placeholder="タイトル"
                :value="formValue.title"
                @input="formValue.title = $event.target.value">
            </div>
            <div class="input__form--box">
                <textarea 
                class="input__form--txt" 
                name="" 
                id="" 
                cols="30" 
                rows="10"
                :value="formValue.content"
                @input="formValue.content = $event.target.value">
                </textarea>
            </div>
            <div class="input__form--box">
                <button class="input__form--btn" type="submit">更新</button>
            </div>
        </form>
    </div>
        <button class="edit__box" @click="resetEdit()">
            戻る
        </button>
        <p>{{ getMemo.content }}</p>
    </div>
</template>
<script>

export default{
    data() {
    return {
      formValue: {
        title: '',
        content: '',
        memo_id:'',
      },
    }
  },
  computed: {
    getToken () {
        return this.$store.state.auth.token
    },
    getUserId(){
        return this.$store.state.auth.id
    },
    getMemo(){
        //クリックされたメモの配列番号を格納
        const memoNum = this.$store.state.auth.edit_id
        //memoNunが消えているときは空を返す
        if (memoNum === null){
            return ''
        }
        //storeから特定のメモを呼び出して返す 使用するのはtitleとcontent
        // return this.$store.state.auth.memo[memoNum]
        const memo = this.$store.state.auth.memo[memoNum]
        this.formValue.title = memo.title // titleプロパティの値を設定
        this.formValue.content = memo.content // contentプロパティの値を設定
        return memo
    }
  },
  methods:{
    async resetEdit(){
        //storeのメモ配列番号をリセット
        await this.$store.commit('auth/resetEdit')
        //トップにリダイレクト
        this.$router.push('/')
        },

    async updateEdit(){
        if(this.formValue.title === ''){
          this.$toast.global.error({
          message: 'タイトルを入力してください。',
        })
        return
        }
        this.formValue.memo_id = await this.getMemo.id
        const response = await this.$axios.$put(
        `${this.$config.apiBaseUrl}/articles/update`,
        this.formValue)

        //storeのメモ配列番号をリセット
        await this.$store.commit('auth/resetEdit')
        //トップにリダイレクト
        this.$router.push('/')
        },
    }
}
</script>

<style lang="scss" scoped>
.edit{
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

    &__box{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 144px;
        height: 60px;
        margin-bottom: 350px;
        background: #D9D9D9;
        border-radius: 5px;
        border: none;
        
    }
}
.input{
    // margin: 0 15%;
    &__form{
        display: flex;
        flex-direction: column;
        // justify-content: start;
        align-items: flex-start;
        
        &--box{
            width: 100%;
            &:nth-of-type(3){
                display: flex;
                justify-content: center;
            }
        }
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
        &--btn{
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
    }

}

</style>