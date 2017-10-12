import Vue from 'vue'
import {
    get_all_articles_url, get_diseases_articles_url, get_fitness_articles_url, get_latest_article_url,
    get_medicine_articles_url
} from "../../../../global/config";
const state = {
    all_posts: {},
    latest_article: null,
    fitness_articles: {},
    medicine_articles: {},
    diseases_articles: {},
}

const mutations = {
    SET_POSTS_LIST(state, all_posts){
        state.all_posts = all_posts
    },
    SET_LATEST_ARTICLE(state, latest_article){
        state.latest_article = latest_article
    },
    SET_FITNESS_ARTICLES_LIST(state, fitness_articles){
        state.fitness_articles = fitness_articles
    },
    SET_MEDICINE_ARTICLES_LIST(state, medicine_articles){
        state.medicine_articles = medicine_articles
    },
    SET_DISEASES_ARTICLES_LIST(state, diseases_articles){
        state.diseases_articles = diseases_articles
    }
}

const actions = {
    setAllPostsList: ({commit},all_posts) => {
        return Vue.http.get(get_all_articles_url)
            .then(response => {
                console.log(response)
                if(response.status === 200){
                    commit('SET_POSTS_LIST',response.body.data)
                }
            })
    },
    setLatestArticle: ({commit}, latest_article) => {
        return Vue.http.get(get_latest_article_url)
            .then(response => {
                console.log(response)
                if(response.status === 200){
                    commit('SET_LATEST_ARTICLE', response.body.data)
                }
            })
    },
    setFitnessArticles: ({commit}, fitness_articles) => {
        return Vue.http.get(get_fitness_articles_url)
            .then(response => {
                console.log(response)
                if(response.status === 200){
                    commit('SET_FITNESS_ARTICLES_LIST', response.body.data)
                }
            })
    },
    setMedicineArticles: ({commit}, medicine_articles) => {
        return Vue.http.get(get_medicine_articles_url)
            .then(response => {
                console.log(response)
                if(response.status === 200){
                    commit('SET_MEDICINE_ARTICLES_LIST', response.body.data)
                }
            })
    },
    setDiseasesArticles: ({commit}, diseases_articles) => {
        return Vue.http.get(get_diseases_articles_url)
            .then(response => {
                console.log(response)
                if(response.status === 200){
                    commit('SET_DISEASES_ARTICLES_LIST', response.body.data)
                }
            })
    }
}

export default {
    state, mutations, actions
}