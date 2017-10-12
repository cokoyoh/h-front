import Vue from 'vue'
const state = {
    sharper_details: {},
    users_list: {},
}

const mutations = {
    SET_USERS_LIST(state, users_list){
        state.users_list = users_list
    }
}

const actions = {
    setUsersList:({commit}, users_list) => {
        return Vue.http.get(users_list_url, {headers:get_header()})
            .then(response => {
                if(response.status === 200){
                    commit('SET_USERS_LIST', response.body.data)
                    console.log('All Users', response.body.data)
                }
            })
    }
}

export default {
    state, mutations, actions
}
