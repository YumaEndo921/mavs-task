<template>
  <div class="delete">
    <h2 class="delete__ttl">Delete Data</h2>
    <ul class="delete__table">
      <li
        class="delete__table--list"
        v-for="(item, index) in items"
        :key="item.id"
      >
        <!-- インデックス番号(配列番号+1) -->
        <p>{{ index + 1 }}</p>
        <!-- タイトルの表示 -->
        <button class="delete__table--ttl" @click="restration(item)">
          {{ item.title }}
        </button>
        <!-- 削除ボタン -->
        <button class="delete__table--del">削除</button>
      </li>
    </ul>
    <!-- <button class="delete__box"> -->
    <nuxt-link class="delete__box" to="/">トップに戻る</nuxt-link>
    <!-- </button> -->
  </div>
</template>

<script>
export default {
  computed: {
    // Tokenの有無でログインしているかどうかを判断
    isLogin() {
      return !!this.$store.state.auth.token
    },
    // ログイン中のユーザーidをstoreから取得
    getUserId() {
      return this.$store.state.auth.id
    },
    // storeのユーザーメモ情報を変数化（配列）
    items() {
      return this.$store.state.auth.delete_memo
    },
  },
  methods: {
    async restration(item) {
      const result = window.confirm(`"${item.title}" を復元しますか？`)
      //   console.log(item)
      if (result) {
        try {
          //APIリクエストをバックエンド側へ送信
          const response = await this.$axios.$post(
            `${this.$config.apiBaseUrl}/articles/restration`,
            //削除されたメモ情報を渡す
            { id: item.id }
          )
        } catch (error) {
          //メモ情報がなければ処理を終了
          return
        }

        console.log('復元しました')
      } else {
        console.log('復元を中止します')
      }
    },
  },
  async fetch() {
    try {
      //APIリクエストをバックエンド側へ送信
      const response = await this.$axios.$post(
        `${this.$config.apiBaseUrl}/articles/restore`,
        //userのidを渡す
        { params: this.getUserId }
      )
      //storeに削除されたメモ情報のみを保存
      await this.$store.commit('auth/setDeleteMemo', response.body)
    } catch (error) {
      //メモ情報がなければ処理を終了
      return
    }
  },
}
</script>

<style lang="scss" scoped>
.delete {
  &__ttl {
    margin-bottom: 62px;
    text-align: center;
    font-size: 64px;
  }
  &__table {
    text-align: center;
    &--list {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 64px;
      margin-bottom: 15px;
    }
    &--ttl {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 653px;
      height: 70px;
      padding-left: 10px;
      background: #d9d9d9;
      border: none;
    }
    &--link {
      display: block;
      background: #000;
    }
    &--del {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 123px;
      height: 66px;
      background: #8e8e8e;
      border: none;
      border-radius: 5px;
    }
  }
  &__box {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 144px;
    height: 60px;
    margin-bottom: 350px;
    background: #d9d9d9;
    border-radius: 5px;
    border: none;
  }
}
</style>
