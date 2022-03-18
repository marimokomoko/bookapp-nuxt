import { mount, RouterLinkStub  } from '@vue/test-utils'
import Header from '@/components/atoms/Header.vue'
describe('画面レイアウト', ()=>{
    it('スナップショットテスト', ()=>{
        const wrapper = mount(Header, { stubs: { NuxtLink: RouterLinkStub }})
        expect(wrapper.html()).toMatchSnapshot()
    })
})