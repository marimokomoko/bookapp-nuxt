import { mount } from '@vue/test-utils'
import Index from '@/pages/book/index.vue'
describe('画面レイアウト', ()=>{
    it('スナップショットテスト', ()=>{
        const wrapper = mount(Index)
        expect(wrapper.html()).toMatchSnapshot()
    })
})