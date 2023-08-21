<script setup lang="ts">
import DnsRecord from './DnsRecord.vue'
import IPIcon from './icons/IconIP.vue'
import EmailIcon from './icons/IconEmail.vue'
import ServerIcon from './icons/IconServer.vue'
import TextIcon from './icons/IconText.vue'
import CanonicalIcon from './icons/IconCanonical.vue'

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
  <DnsRecord v-for="ip in a" :key="ip">
    <template #icon>
      <IPIcon />
    </template>
    <template #heading>A (IP v4)</template>

    {{ ip }}
  </DnsRecord>

  <DnsRecord v-for="ip in aaaa" :key="ip">
    <template #icon>
      <IPIcon />
    </template>
    <template #heading>AAAA (IP v6)</template>

    {{ ip }}
  </DnsRecord>

  <DnsRecord v-for="r in mx" :key="r.Host + r.Pref">
    <template #icon>
      <EmailIcon />
    </template>
    <template #heading>MX</template>

    {{ r }}
  </DnsRecord>

  <DnsRecord v-for="n in ns" :key="n.Host">
    <template #icon>
      <ServerIcon />
    </template>
    <template #heading>Nameserver</template>

    {{ n.Host }}
  </DnsRecord>

  <DnsRecord v-for="t in txt" :key="t">
    <template #icon>
      <TextIcon />
    </template>
    <template #heading>Text records</template>

    {{ t }}
  </DnsRecord>

  <DnsRecord>
    <template #icon>
      <CanonicalIcon />
    </template>
    <template #heading>Canonical Name (CNAME)</template>

    {{ cname }}
  </DnsRecord>
</template>
