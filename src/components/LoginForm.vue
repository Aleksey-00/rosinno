<template>
  <div class="login">
    <h3 class="login-top">Форма Входа</h3>
    <div class="form-group mt-3">
        <input
          type="text"
          class="form-control"
          placeholder="Введите Логин"
          v-model="login"
        />
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Введите Пароль"
        v-model="password"
      />
    </div>
    <button
      type="button"
      class="btn btn-primary"
      @click="handleLogin"
    >Войти</button>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',

  data () {
    return {
      login: '',
      password: ''
    }
  },

  methods: {
    handleLogin () {
      let admin = this.$store.getters.ADMIN
      if (admin.login === this.login && admin.password === this.password) {
        this.$store.dispatch('SET_TOKEN', true)
        this.$router.push('/')
      } else {
        this.$swal.fire({
          type: 'error',
          title: 'Ошибка',
          text: 'Логин или Пароль указаны не верно, Попробуйте снова.',
          timer: 3200
        })
        this.login = ''
        this.password = ''
      }
    }
  }
}
</script>

<style scoped>
.login{
  width: 50%;
  margin-left: 25%;
}

.login-top{
  margin-top: 20%;
}
</style>
