<template>
  <div>
    <h1>Ping</h1>
    <p>Status: {{ status }}</p>
    <p>Commit Hash: {{ commitHash }}</p>
  </div>
</template>

<script>
import { short } from 'git-rev-sync'

export default {
  data() {
    return {
      status: '',
      commitHash: '',
    }
  },
  mounted() {
    this.checkHealth()
    this.getCommitHash()
  },
  methods: {
    checkHealth() {
      // TODO: Actually check the health of the service
      this.status = 'Healthy'
    },
    getCommitHash() {
      this.commitHash = short()
    },
  },
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
