<template>
  <div class="list-users">
    <h5 class="h-top">Общее кол-во пользователей: {{users.length}}</h5>
    <router-link to="/user/add">
      <button
        type="button"
        class="btn btn-outline-primary margin-btn"
      >Добавить Пользователя</button>
    </router-link>
    <logout-form></logout-form>
    <list-item v-model="users"></list-item>
  </div>
</template>

<script>
import ListItem from './ListItem'
import LogoutForm from './LogoutForm'

export default {
  name: 'ListUsers',
  components: {LogoutForm, ListItem},
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.users = this.$store.getters.USERS
  }
}
</script>

<style scoped>
.margin-btn{
  margin-top: 3%;
  margin-left: 6px;
}
.h-top{
   margin-top: 2%;
}
</style>
