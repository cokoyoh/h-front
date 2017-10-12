import Vue from 'vue'
import {get_all_app_links_url} from "../../../../global/config";
const state = {
    all_apps: {}
}

const mutations = {
    SET_APPS_LIST(state, all_apps){
        state.all_apps = all_apps
    }
}

const actions = {
    setAppsList: ({commit},all_apps) => {
        return Vue.http.get(get_all_app_links_url)
            .then(response => {
                console.log(response.body.data)
                if(response.status === 200){
                    commit('SET_APPS_LIST', response.body.data)
                }
            })
    }
}

export default {
    state, mutations, actions
}