import { mount, RouterLinkStub } from '@vue/test-utils'
import Footer from '@/components/atoms/Footer.vue'
describe('画面レイアウト', ()=>{
    it('スナップショットテスト', ()=>{
        const wrapper = mount(Footer, { stubs: { NuxtLink: RouterLinkStub }})
        expect(wrapper.html()).toMatchSnapshot()
    })
})