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
  <div class="container-col gapy-1 p-1">
    <h1 class="green">DNS Query</h1>
    <form @submit.prevent="queryDns" class="container-col gapy-05">
      <div class="input">
        <label for="domain">Enter a domain name to check its DNS records</label>
        <input v-model="domain" placeholder="example.com" type="text" />
      </div>
      <button @click="queryDns" class="button button-neutral gapx-1">
        <label>Check</label>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke-width="1.5"/>
            <path opacity="0.5" d="M17.8486 6.19085C19.8605 5.81929 21.3391 5.98001 21.8291 6.76327C22.8403 8.37947 19.2594 12.0342 13.8309 14.9264C8.40242 17.8185 3.18203 18.8529 2.17085 17.2367C1.63758 16.3844 2.38148 14.9651 4 13.3897" stroke-width="1.5"/>
        </svg>
      </button>
    </form>
  </div>
</template>

<style>


.input {
    display: flex;
    flex-direction: column;
    position: relative;
}

.input input[type="text"],
.input input[type="password"],
.input input[type="email"],
.input input[type="number"],
.input textarea, select {
    width: 100%;
    border: 1px solid var(--neutral);
    background-color: var(--light-neutral);
    padding: 10px;
    border-radius: var(--radius);
    font-size: 16px;
    transition: border-color 0.3s ease, background-color 0.3s ease;
}

.input input[type="text"]:focus,
.input input[type="password"]:focus,
.input input[type="email"]:focus,
.input input[type="number"]:focus,
.input textarea:focus {
    border-color: var(--primary);
    background-color: var(--white);
    outline: none;
}

.input label {
    margin-bottom: 5px;
    color: var(--tertiary);
    transition: color 0.3s ease;
}

.input:focus-within label {
    color: var(--primary);
}
</style>