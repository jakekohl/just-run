<template>
  <nav class="top-nav">
    <div class="left-nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div class="right-nav">
      <button @click="toggleSubMenu">Menu</button>
      <div v-if="showSubMenu" class="sub-menu">
        <button @click="openLoginModal">Login</button>
        <RouterLink to="/Account">Account</RouterLink>
      </div>
    </div>
  </nav>
  <div class="content">
    <RouterView />
  </div>
  <LoginModal v-if="showLoginModal" @close="closeLoginModal" />
</template>

<script>
import LoginModal from '@/components/LoginModal.vue'

export default {
  data() {
    return {
      showSubMenu: false,
      showLoginModal: false,
    }
  },
  methods: {
    toggleSubMenu() {
      this.showSubMenu = !this.showSubMenu
    },
    openLoginModal() {
      this.showLoginModal = true
    },
    closeLoginModal() {
      this.showLoginModal = false
    },
  },
  components: {
    LoginModal,
  },
}
</script>

<style>
.top-nav {
  display: flex;
  align-items: center;
  background-color: #272626;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.left-nav {
  display: flex;
  align-items: center;
}

.left-nav RouterLink {
  margin-right: 50px; /* Add spacing between the links */
}

.right-nav {
  margin-left: auto; /* Push the right-nav to the right side */
}

.right-nav button {
  background-color: #dad84f;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.right-nav RouterLink {
  margin-left: 50px; /* Add spacing between the links */
}

.content {
  margin-top: 20px;
}

.sub-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  margin-left: 10px;
  background-color: #dad84f;
  padding: 10px;
  border: 1px solid #050505;
  display: flex;
  flex-direction: column;
  max-width: 400px;
}
</style>
