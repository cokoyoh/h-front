<template>
    <div class="diseases-articles">
        <section v-for="article in postStore.diseases_articles">
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <img :src="'http://localhost:8000/uploads/posts-images/' +    article.image">
                </div>
                <div class="col-lg-8 col-md-8">
                    <p>{{article.title}}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: mapState({
            postStore: state => state.postStore
        }),
        created() {
            this.$store.dispatch('setDiseasesArticles')
        },
        updated() {
            this.$store.dispatch('setDiseasesArticles')
        },
    }
</script>

<style lang="sass">
    .diseases-articles img
        width: 120px
        height: 80px
        padding-bottom: 10px

    .diseases-articles h2
        font-weight: 600

</style>