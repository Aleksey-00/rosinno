<template>
  <button
    type="button"
    class="btn btn-outline-info btn-right"
    @click="onLogout"
  >Выйти</button>
</template>

<script>
export default {
  name: 'LogoutForm',
  methods: {
    onLogout () {
      this.$store.dispatch('SET_TOKEN', false)
      localStorage.removeItem('user-token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.btn-right{
  float: right;
  margin-top: 3%;
}
</style>
