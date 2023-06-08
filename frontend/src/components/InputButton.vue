<template>
    <div class="input">
     <div class="input__form--box">
       <button class="input__form--btn" type="submit" >{{ buttonName }}</button>
     </div>
   </div>
   </template>
 
 <script>
 export default {
   props:{
     buttonName:{
       type:String
     },
   } ,
 }
 </script>
 
 <style lang="scss" scoped>
 
 .input{
     width: 100%;
     &__form{
        &--box{
            display: flex;
            justify-content: center;
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