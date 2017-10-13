<template>
    <div class="fitness-articles">
        <h2>Fitness</h2>
        <section v-for="article in postStore.fitness_articles">
            <div class="row">
                <div class="col-lg-4 col-md-4">{{article.title}}</div>
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
            this.$store.dispatch('setFitnessArticles')
        },
        updated() {
            this.$store.dispatch('setFitnessArticles')
        },
    }
</script>

<style lang="sass">
    .fitness-articles h2
        font-weight: 800
        font-size: 60px
        text-transform: uppercase
</style>