<template>
  <div class="card-root">
    <div class="card" v-for="(user) in users" :key="user.id">
      <div class="card-img-top">
        <img :src="user.icon" />
      </div>
      <div class="card-body">
        Ник: {{user.login}} <br />
        Пароль: {{user.password}}
      </div>
      <div class="card-footer">
        <router-link :to="'/user/edit/' + user.id">
          <button
            type="button"
            class="btn btn-success"
          >Редактировать</button>
        </router-link>
        <button
          type="button"
          class="btn btn-danger"
          @click="deleteUser(user)"
        >Удалить</button>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['value'],
  data () {
    return {
      users: []
    }
  },
  methods: {
    deleteUser (user) {
      this.$store.dispatch('DELETE_USER', user)
    }
  },
  watch: {
    value () {
      this.users = this.value
    }
  }
}
</script>

<style scoped>
  .card {
    position: relative;
    display: -ms-flexbox;
    display: inline-block;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    margin-top: 2%;
    margin-left: 7px;
  }

  img {
    vertical-align: middle;
    border-style: none;
    margin-left: 16px;
    height: 250px;
    width: 250px;
  }

  .card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
    margin-left: 16px;
  }
</style>
