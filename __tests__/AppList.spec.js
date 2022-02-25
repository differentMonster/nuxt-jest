import {
    mount
} from '@vue/test-utils';
import AppList from '@/components/AppList.vue';
import AppHeader from '@/components/AppHeader.vue';

describe('AppList', () => {
    it('renders content within the default slot', () => {
        let headerWrapper = {
            render(h) {
                return h(AppHeader, {
                    props: {
                        text: 'Home'
                    }
                })
            }
        }
        let wrapper = mount(AppList, {
            slots: {
                // can add components
                items: headerWrapper
            }
        })

        expect(wrapper.html()).toContain('Home')
    })
})