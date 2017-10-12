import Vue from 'vue'
import Vuex from 'vuex'
import userStore from '../components/pages/users/userStore'
import adminStore from '../components/pages/users/admin/adminStore'
import appStore from '../components/pages/users/admin/appStore'
import postStore from '../components/pages/users/admin/postStore'


Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        userStore,
        adminStore,
        appStore,
        postStore,
    },
    strict: debug
})