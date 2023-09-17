<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import DnsRecordList from '../components/DnsRecordList.vue'

const route = useRoute()
const isLoading = ref(true)
const queryResponse = ref({
  a: [],
  aaaa: [],
  mx: [],
  ns: [],
  txt: [],
  cname: ''
})

async function fetchDnsRecords(resolver: String, domain: String) {
  try {
    isLoading.value = true

    const response = await fetch(`/api/v1/resolvers/${resolver}/domains/${domain}`)
    queryResponse.value = await response.json()
  } catch (e) {
    console.error('DNS query failed: ', e)
  } finally {
    isLoading.value = false
  }
}

const resolver = route.params.resolver.toString()
const domain = route.params.domain.toString()
fetchDnsRecords(resolver, domain)
</script>

<template>
  <main class="min-h-screen p-6 pb-12">
    <div class="p-3">
      <RouterLink to="/" class="rounded bg-gray-100 p-3">&lt; Go back</RouterLink>
    </div>

    <h1 class="text-center text-lg font-semibold">
      DNS records of <span class="font-mono font-bold">{{ domain}}</span>
    </h1>

    <div class="flex flex-wrap justify-center">
      <DnsRecordList
          v-if="!isLoading"
          :a="queryResponse.a"
          :aaaa="queryResponse.aaaa"
          :mx="queryResponse.mx"
          :ns="queryResponse.ns"
          :txt="queryResponse.txt"
          :cname="queryResponse.cname"
      />
    </div>
  </main>
</template>
