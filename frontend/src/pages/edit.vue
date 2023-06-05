<template>
    <div class="edit">
        <h2 class="edit__ttl">Memo Edit</h2>
        <inputMemo class="edit__input" />
        <button class="edit__btn">更新</button>
        <div class="edit__box">
        <nuxt-link class="edit__back"  to="/">戻る</nuxt-link>
        </div>
        
    </div>
</template>

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