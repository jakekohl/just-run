<template>
  <div class="login-modal">
    <div class="login-modal-content">
      <form @submit="submitForm">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
    },
  },
}
</script>

<style scoped>
.login-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.login-modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
