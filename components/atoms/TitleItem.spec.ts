import { mount } from '@vue/test-utils'
import TitleItem from '@/components/atoms/TitleItem.vue'
describe('画面レイアウト', ()=>{
    it('スナップショットテスト', ()=>{
        const wrapper = mount(TitleItem)
        expect(wrapper.html()).toMatchSnapshot()
    })
})