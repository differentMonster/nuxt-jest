import {
    mount,
    RouterLinkStub
}
from '@vue/test-utils'
import AppNotifications from '@/components/AppNotifications.vue'
import axios from 'axios'
// import {
//     NuxtAxiosInstance
// } from '@nuxtjs/axios'

jest.mock('axios', () => {
    return {
        get: () => Promise.resolve({
            data: {
                data: [{
                    id: 1,
                    body: 'First notification'
                }, {
                    id: 2,
                    body: 'Second notification'
                }]
            }
        })
    }
})

describe('AppNotifications', () => {
    it('renders a list of notifications', () => {
        let wrapper = mount(AppNotifications)

        wrapper.vm.$nextTick(() => {
            console.log(wrapper.html())
        })
    })
})