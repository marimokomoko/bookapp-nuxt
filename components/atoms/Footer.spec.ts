import { mount } from '@vue/test-utils'
import Footer from '@/components/atoms/Footer.vue'
describe('画面レイアウト', ()=>{
    it('スナップショットテスト', ()=>{
        const wrapper = mount(Footer)
        expect(wrapper.html()).toMatchSnapshot()
    })
})