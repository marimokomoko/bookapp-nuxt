import { mount } from '@vue/test-utils'
import ButtonItem from '@/components/atoms/ButtonItem.vue'
describe('画面レイアウト', ()=>{
    it('スナップショットテスト', ()=>{
        const wrapper = mount(ButtonItem)
        expect(wrapper.html()).toMatchSnapshot()
    })
})