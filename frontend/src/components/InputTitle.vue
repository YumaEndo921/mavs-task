<template>
    <div>
     <div class="input__form--box">
       <input 
       class="input__form--ttl" 
       type="text" 
       placeholder="タイトル"
       :value="formValue.title"
       @input="$emit('input', $event.target.value)">
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
         userId:'',
       },
     }
   },
   fetch(){
     //クリックされたメモの配列番号を格納
     const memoNum = this.$store.state.auth.edit_id
     //memoNunが消えているときは空を返す
     if (memoNum === null){
         return 
     }
     //storeから特定のメモを呼び出して格納
     const memo = this.$store.state.auth.memo[memoNum]
     this.formValue.title = memo.title // titleプロパティの値を設定
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