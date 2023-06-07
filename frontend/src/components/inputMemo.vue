<template>
   <div class="input">
        <form class="input__form" @submit.prevent="childEvent">
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
                <button class="input__form--btn" type="submit">{{ send }}</button>
            </div>
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
        userId:'',
      },
    }
  },
  props: ['send'],
  computed: {
   getToken () {
     return this.$store.state.auth.token
   },
   getUserId(){
    return this.$store.state.auth.id
   },
 },
  // methods: {
  //   childEvent() {
  //     this.$emit('parent-event',this.formValue)
  //   },
  //   // 新規メモ登録の送信処理
  // },
}
</script>

<style lang="scss" scoped>

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