import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { Route } from 'vue-router'
import ButtonItem from '@/components/atoms/ButtonItem.vue'


let wrapper: Wrapper<Vue>;
// const RouterLink = localVue.component('router-link');

const routeMock: Partial<Route> = {
    query: {}
}
describe('画面レイアウト', () => {
    it('スナップショットテスト', () => {
        wrapper = mount(ButtonItem, {
            propsData: {
                buttonText: 'test',
                url: 'test',
                color: 'primary'
            },
            localVue: createLocalVue(),
            vuetify: new Vuetify(),
            mocks: {
                $route: routeMock
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
        // expect(wrapper.findAll(RouterLink)).to.length(1)

    })
})