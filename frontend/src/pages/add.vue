<template>
    <div class="add">
        <h2 class="add__ttl">Memo Add</h2>
            <inputMemo send="保存" class="add__input" />
        <div class="add__box">
        <nuxt-link class="add__back"  to="/">戻る</nuxt-link>
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
        margin-bottom: 62px;
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