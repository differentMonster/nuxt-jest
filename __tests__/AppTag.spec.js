import {
    mount
} from '@vue/test-utils';
import AppTag from '@/components/AppTag.vue';

describe('AppTag', () => {
    it('renders out the tag test', () => {

        let wrapper = mount(AppTag, {

            propsData: {
                text: 'Vue'
            }
        })

        expect(wrapper.html()).toContain('Vue')
    })


    it('renders the plain theme by default', () => {

        let wrapper = mount(AppTag, {

            propsData: {
                text: 'Vue',
            }
        })

        expect(wrapper.classes()).toEqual(['tag'])
    })

    it('renders the plain theme by default', () => {

        let wrapper = mount(AppTag, {

            propsData: {
                text: 'Vue',
                dark: true
            }
        })

        expect(wrapper.classes()).toContain('tag--dark')
    })
})