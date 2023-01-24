import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Test from './Test.vue'

describe('Test.vue', () => {
  it('should render', () => {
    const wrapper = mount(Test)
    expect(wrapper).toBeTruthy()
  })
})
