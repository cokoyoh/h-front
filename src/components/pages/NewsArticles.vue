<template>
    <div class="news-articles">
        <div class="container-fluid">
           <div class="row">
               <div class="col-lg-8 col-md-8">
                  <section class="main-stories">
                      <h2>Main Stories here</h2>
                      <main-story></main-story>
                  </section>
               </div>
               <div class="col-lg-4 col-md-4">
                  <section class="diseases-articles">
                      <h2> Disease Articles Here</h2>
                      <diseases></diseases>
                  </section>
               </div>
           </div>
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <section class="fitness-articles">
                        <h2>Fitness Articles Here</h2>
                        <fitness></fitness>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import DiseaseArticles from './DiseaseArticles.vue'
    import FitnessArticles from './FitnessArticles.vue'
    import MainArticle from './MainArticle.vue'
    export default {
        components: {
            'diseases': DiseaseArticles,
            'fitness': FitnessArticles,
            'main-story': MainArticle
        },
        computed: mapState({
            postStore: state => state.postStore
        }),
    }
</script>

<style lang="sass">
    .news-articles
        padding: 30px 0 30px
        font-family: 'Lato', sans-serif

    .news-articles img
        width: 553px
        height: 336px
    .news-articles p,h4
        font-family: 'Lato', sans-serif

    .news-articles .main-stories
        background-color: blue

    .news-articles .diseases-articles
        background-color: red

    .news-articles .fitness-articles
        background-color: green
</style>