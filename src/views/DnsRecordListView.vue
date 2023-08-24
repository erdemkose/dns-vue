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
  <main>
    <h2>DNS Records from the selected source</h2>
    <DnsRecordList
      v-if="!isLoading"
      :a="queryResponse.a"
      :aaaa="queryResponse.aaaa"
      :mx="queryResponse.mx"
      :ns="queryResponse.ns"
      :txt="queryResponse.txt"
      :cname="queryResponse.cname"
    />
  </main>
</template>
