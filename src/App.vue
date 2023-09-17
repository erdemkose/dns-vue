<script setup lang="ts">
import { RouterView } from 'vue-router'
import AuthorFooter from "@/components/AuthorFooter.vue";
import './assets/style.css'
</script>

<template >
  <RouterView :key="$route.fullPath" />
  <AuthorFooter />
</template>
