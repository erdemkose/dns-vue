import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DnsQuery from '../DnsQuery.vue'

describe('DnsQuery', () => {
  it('renders properly', () => {
    const wrapper = mount(DnsQuery)
    expect(wrapper.text()).toContain('DNS Query')
  })
})
