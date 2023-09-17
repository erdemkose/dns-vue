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
  <div class="w-96 rounded-lg bg-gray-200 p-8 shadow-md">
    <img class="mx-auto" alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" />
    <h1 class="mb-4 text-center text-2xl font-semibold">DNS Checker</h1>
    <form @submit.prevent="queryDns">
      <div class="mb-4">
        <label for="domain" class="block text-sm font-medium text-gray-700">Enter a domain name to check its DNS records</label>
        <input id="domain" v-model="domain" placeholder="example.com" type="text"
               class="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-blue-400"
        />
      </div>
      <button @click="queryDns" class="w-full rounded-md bg-blue-500 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-blue-600">
        <label>Show DNS records</label>
      </button>
    </form>
  </div>
</template>
