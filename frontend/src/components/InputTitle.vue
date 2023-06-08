<template>
    <div class="input">
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
         &--ttl{
             width: 387px;
             height: 66px;
             margin-bottom: 53px;
             padding-left: 20px;
             font-size: 24px;
         }
     }
 }
 </style>