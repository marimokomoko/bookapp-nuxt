import { mount } from '@vue/test-utils'
import Serach from '@/pages/book/search.vue'
describe('画面レイアウト', ()=>{
    it('スナップショットテスト', ()=>{
        const wrapper = mount(Serach)
        expect(wrapper.html()).toMatchSnapshot()
    })
})