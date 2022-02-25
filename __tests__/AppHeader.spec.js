import {
    mount
} from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';

describe('AppHeader', () => {
    it('renders out the header test', () => {
        let text = 'Home'

        let wrapper = mount(AppHeader, {

            propsData: {
                text
            }
        })

        expect(wrapper.html()).toContain(text)
    })
})