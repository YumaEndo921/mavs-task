<template>
   <div class="input">
        <form class="input__form" action="">
            <input class="input__form--ttl" type="text" placeholder="タイトル">
            <textarea class="input__form--txt" name="" id="" cols="30" rows="10"></textarea>
        </form>
    </div>
  </template>

<script>

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