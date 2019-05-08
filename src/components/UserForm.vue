<template>
<div class="user-form">
  <h3>{{message}}</h3>
  <div class="form-group mt-4">
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
  <div class="form-group">
    <select class="form-control" v-model="selectedIcon">
      <option
        v-for="(icon,index) in icons"
        :key="index"
      >{{icon.name}}</option>
    </select>
  </div>
  <button
    type="button"
    class="btn btn-success"
    @click="onHandleNewUserOrUpdate"
  >Сохранить</button>
</div>
</template>

<script>
export default {
  name: 'UserForm',
  data () {
    return {
      message: 'Добавление Нового Пользователя',
      icons: [
        {name: 'по дефолту', path: require('../assets/user-icon.png')},
        {name: 'Барт Симпсон', path: require('../assets/bart.jpeg')},
        {name: 'Гомер Симпсон', path: require('../assets/homer.jpeg')},
        {name: 'Джерри', path: require('../assets/jerry.jpeg')},
        {name: 'Микки Маус', path: require('../assets/micky.jpeg')},
        {name: 'Спанч Боб', path: require('../assets/spanch-bob.jpeg')}
      ],
      login: '',
      password: '',
      selectedIcon: '',
      lastId: 0,
      mode: 'add',
      users: []
    }
  },
  methods: {
    onHandleNewUserOrUpdate () {
      if (this.mode === 'add') {
        if (this.login !== '' && this.password !== '') {
          let user = {
            id: this.lastId + 1,
            login: this.login,
            password: this.password,
            icon: this.filteredIcon(this.selectedIcon).path
          }
          this.$store.dispatch('ADD_USER', user)
          this.$router.push('/')
        } else {
          this.$swal.fire({
            type: 'error',
            title: 'Ошибка',
            text: 'Форма Заполнена не верно, Попробуйте снова.',
            timer: 3200
          })
        }
      } else {
        if (this.login !== '' && this.password !== '') {
          let user = {
            id: this.$route.params.id,
            login: this.login,
            password: this.password,
            icon: this.filteredIcon(this.selectedIcon).path
          }
          this.$store.dispatch('UPDATE_USER', user)
          this.$router.push('/')
        } else {
          this.$swal.fire({
            type: 'error',
            title: 'Ошибка',
            text: 'Форма Заполнена не верно, Попробуйте снова.',
            timer: 3200
          })
        }
      }
    },
    getUser (id) {
      let result = null
      this.users.map((item) => {
        if (parseInt(item.id) === parseInt(id)) {
          result = item
        }
      })
      return result
    },
    filteredIcon (iconName) {
      let result = null
      this.icons.forEach(function (item) {
        if (item !== undefined) {
          if (item.name.toLowerCase().indexOf(iconName.toLowerCase()) > -1) {
            result = item
          }
        }
      })
      return result
    },
    filteredIconByPath (path) {
      let result = null
      this.icons.map((item) => {
        if (item.path.toLowerCase().indexOf(path.toLowerCase()) > -1) {
          result = item.name
        }
      })
      return result
    },
    checkParams () {
      if (this.$route.params.id !== null) {
        let user = this.getUser(this.$route.params.id)
        if (user !== null) {
          this.message = 'Редактирование Записи №' + this.$route.params.id
          this.mode = 'edit'
          this.login = user.login
          this.password = user.password
          this.selectedIcon = this.filteredIconByPath(user.icon)
        }
      }
    }
  },
  mounted () {
    this.lastId = this.$store.getters.LASTID
    this.users = this.$store.getters.USERS
    this.checkParams()
  }
}
</script>

<style scoped>
.user-form{
  margin-top: 5%;
  width: 50%;
  margin-left: 20%;
}
</style>
