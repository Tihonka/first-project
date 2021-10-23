import { mount } from '@vue/test-utils'
import TestComponent from './TestComponent.vue'

describe('TestComponent testing', ()=> {
    test('Test content', ()=>{
        const wrapper = mount(TestComponent, {
            propsData: {
                message: "Hello world!"
            }
        })
        expect(wrapper.html()).toContain('<div>The message is: Hello world!</div>')
    })
})
