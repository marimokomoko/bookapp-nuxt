import { mount } from '@vue/test-utils'
import Header from '@/components/atoms/Header.vue'
describe('画面レイアウト', ()=>{
    it('スナップショットテスト', ()=>{
        const wrapper = mount(Header)
        expect(wrapper.html()).toMatchSnapshot()
    })
})