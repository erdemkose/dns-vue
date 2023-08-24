<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const domain = ref('')
const route = useRoute()
const router = useRouter()

if (route.name === 'query') {
  domain.value = route.params.domain.toString()
}

function queryDns() {
  // validateDomain()
  router.push({
    name: 'query',
    params: {
      resolver: 'local',
      domain: domain.value
    }
  })
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">DNS Query</h1>
    <h3>Enter a domain name to check its DNS records</h3>

    <form @submit.prevent="queryDns">
      <input v-model="domain" placeholder="example.com" />
      <button @click="queryDns">Submit</button>
    </form>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
