<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DnsQuery from './components/DnsQuery.vue'
import './assets/main.css'
</script>

<template >
  <div class="container-col centerhv w-1 center-text gapy-05">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <DnsQuery />
    <RouterView :key="$route.fullPath" />
</div>
</template>