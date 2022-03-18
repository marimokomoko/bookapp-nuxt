import { mount } from '@vue/test-utils'
import Book from '@/pages/book.vue'
describe('画面レイアウト', ()=>{
    it('スナップショットテスト', ()=>{
        const wrapper = mount(Book)
        expect(wrapper.html()).toMatchSnapshot()
    })
})