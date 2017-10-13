<template>
    <div class="main-article">
        <h2>{{postStore.latest_article.title}}</h2>
        <img :src="'http://localhost:8000/uploads/posts-images/' +   postStore.latest_article.image">
        <p>{{postStore.latest_article.summary}}</p>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: mapState({
            postStore: state => state.postStore
        }),
        created() {
            this.$store.dispatch('setLatestArticle')
        },
        updated() {
            this.$store.dispatch('setLatestArticle')
        },
    }
</script>

<style lang="sass">
    .main-article h2
        font-weight: 600
</style>