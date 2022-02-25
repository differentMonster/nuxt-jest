import {
    mount
} from '@vue/test-utils';
import AppReveal from '@/components/AppReveal.vue';

describe('AppReveal', () => {
    it('renders the text on click', () => {

        let wrapper = mount(AppReveal, {

            propsData: {
                text: 'Hello'
            }
        })

        wrapper.find('a').trigger('click')

        expect(wrapper.html()).toContain('Hello')
    })


    it('hides the original anchor when clicked', () => {

        let wrapper = mount(AppReveal, {

            propsData: {
                text: 'Hello'
            }
        })

        wrapper.find('a').trigger('click')


        console.log(wrapper.find('a'))

        // expect(wrapper.html()).not.toContain('Click to reveal')
    })
})