import {
    mount
} from '@vue/test-utils';
import MagaMenu from '@/components/MagaMenu.vue';

describe('test', () => {
    it('works', () => {
        let wrapper = mount(MagaMenu)
        expect(wrapper.html()).toContain('MagaMenu')
    })
})