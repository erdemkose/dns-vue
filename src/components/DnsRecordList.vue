<script setup lang="ts">
import DnsRecord from './DnsRecord.vue'

defineProps<{
  a: Array<string>
  aaaa: Array<string>
  mx: Array<{ Host: string; Pref: string }>
  ns: Array<{ Host: string }>
  txt: Array<string>
  cname: string
}>()
</script>

<template>
  <DnsRecord v-if="a && a.length > 0">
    <template #heading>A</template>
    <template #subheading>IP v4 addresses</template>
    <ul class="flex flex-col">
      <li v-for="ip in a" :key="ip"
          class="-mt-px inline-flex items-center gap-x-2 bg-gray-200 p-3 font-mono text-sm font-medium text-gray-800 first:mt-0 odd:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:odd:bg-slate-800"
      >
        {{ ip }}
      </li>
    </ul>
  </DnsRecord>

  <DnsRecord v-if="aaaa && aaaa.length > 0">
    <template #heading>AAAA</template>
    <template #subheading>IP v6 addresses</template>

    <ul class="flex flex-col">
      <li v-for="ip in aaaa" :key="ip"
          class="-mt-px inline-flex items-center gap-x-2 bg-gray-200 p-3 font-mono text-sm font-medium text-gray-800 first:mt-0 odd:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:odd:bg-slate-800"
      >
        {{ ip }}
      </li>
    </ul>
  </DnsRecord>

  <DnsRecord v-if="mx && mx.length > 0">
    <template #heading>MX</template>
    <template #subheading>E-mail servers</template>

    <ul class="flex flex-col">
      <li v-for="s in mx" :key="s.Host"
          class="-mt-px inline-flex items-center gap-x-2 bg-gray-200 p-3 font-mono text-sm font-medium text-gray-800 first:mt-0 odd:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:odd:bg-slate-800"
      >
        {{ s.Pref }}: {{ s.Host }}
      </li>
    </ul>
  </DnsRecord>

  <DnsRecord v-if="ns && ns.length > 0">
    <template #heading>Name servers</template>
    <template #subheading>Authoritative name servers</template>

    <ul class="flex flex-col">
      <li v-for="n in ns" :key="n.Host"
          class="-mt-px inline-flex items-center gap-x-2 bg-gray-200 p-3 font-mono text-sm font-medium text-gray-800 first:mt-0 odd:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:odd:bg-slate-800"
      >
        {{ n.Host }}
      </li>
    </ul>
  </DnsRecord>

  <DnsRecord v-if="txt && txt.length > 0">
    <template #heading>Text records</template>
    <template #subheading>Additional text records</template>

    <ul class="flex flex-col">
      <li v-for="t in txt" :key="t"
          class="-mt-px inline-flex items-center gap-x-2 bg-gray-200 p-3 font-mono text-sm font-medium text-gray-800 first:mt-0 odd:bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:odd:bg-slate-800"
      >
        {{ t }}
      </li>
    </ul>
  </DnsRecord>

  <DnsRecord v-if="cname && cname.length > 0">
    <template #heading>CNAME</template>
    <template #subheading>Canonical Name</template>

    <p class="p-3">{{ cname }}</p>
  </DnsRecord>
</template>
