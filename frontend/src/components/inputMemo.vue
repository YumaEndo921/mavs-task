<template>
   <div class="input">
        <form class="input__form" action="">
            <input class="input__form--ttl" type="text">
            <textarea class="input__form--txt" name="" id="" cols="30" rows="10"></textarea>
        </form>
    </div>

  </template>

<script>

</script>

<style lang="scss" scoped>

.input{
    &__form{
        // display: flex;
        // flex-direction: column;
        // justify-content: center;
        // align-items: start;
        
        &--ttl{
            width: 387px;
            height: 66px;
        }
        &--txt{
            width: 1025px;
            height: 276px;
        }
        
    }
}


</style>