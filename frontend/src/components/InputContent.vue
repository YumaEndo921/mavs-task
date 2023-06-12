<template>
    <div class="input">
     <div class="input__form--box">
       <textarea 
       class="input__form--txt" 
       name="" 
       id="" 
       cols="30" 
       rows="10"
       :value="formValue.content"
       @input="$emit('input', $event.target.value)">
       </textarea>
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
     this.formValue.content = memo.content // contentプロパティの値を設定
   },
 }
 </script>
 
 <style lang="scss" scoped>
 .input{
     &__form{
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         &--box{
             width: 100%;
             &:nth-of-type(3){
                 display: flex;
                 justify-content: center;
             }
         }
         &--txt{
          @media screen and (min-width: 1024px) {
            width: 1100px;
        }
             width: 768px;
             height: 276px;
             margin-bottom: 34px;
             padding-top: 20px;
             padding-left: 20px;
            }
     }
 }
 </style>