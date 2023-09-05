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
  <div class="container-col p-1">
    <DnsRecord v-if="a && a.length > 0">
    <template #icon>
      <IPIcon />
    </template>
    <template #heading>A (IP v4)</template>

    <ul>
      <li v-for="ip in a" :key="ip">
        {{ ip }}
      </li>
    </ul>
  </DnsRecord>

  <DnsRecord v-if="aaaa && aaaa.length > 0">
    <template #icon>
      <IPIcon />
    </template>
    <template #heading>AAAA (IP v6)</template>

    <ul>
      <li v-for="ip in aaaa" :key="ip">
        {{ ip }}
      </li>
    </ul>
  </DnsRecord>

  <DnsRecord v-if="mx && mx.length > 0">
    <template #icon>
      <EmailIcon />
    </template>
    <template #heading>MX</template>

    <ul>
      <li v-for="s in mx" :key="s.Host">
        {{ s.Pref }}: {{ s.Host }}
      </li>
    </ul>
  </DnsRecord>

  <DnsRecord v-if="ns && ns.length > 0">
    <template #icon>
      <ServerIcon />
    </template>
    <template #heading>Name servers</template>

    <ul>
      <li v-for="n in ns" :key="n.Host">
        {{ n.Host }}
      </li>
    </ul>
  </DnsRecord>

  <DnsRecord v-if="txt && txt.length > 0">
    <template #icon>
      <TextIcon />
    </template>
    <template #heading>Text records</template>

    <ul>
      <li v-for="t in txt" :key="t">
        {{ t }}
      </li>
    </ul>
  </DnsRecord>

  <DnsRecord v-if="cname && cname.length > 0">
    <template #icon>
      <CanonicalIcon />
    </template>
    <template #heading>Canonical Name (CNAME)</template>

    {{ cname }}
  </DnsRecord>
  </div>
</template>
