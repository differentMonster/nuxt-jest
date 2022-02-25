import {
    mount,
    RouterLinkStub
}
from '@vue/test-utils'
import AppSignIn from '@/components/AppSignIn.vue'

describe('AppSignIn', () => {
    it('renders a sign in in', () => {
        let wrapper = mount(AppSignIn, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        expect(wrapper.find('a').props().to.name).toEqual('auth-signin')
    })
})