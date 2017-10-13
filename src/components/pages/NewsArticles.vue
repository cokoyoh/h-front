<template>
    <div class="news-articles">
        <div class="container-fluid">
           <div class="row">
               <div class="col-lg-8 col-md-8">
                  <section class="main-stories">
                      <main-story></main-story>
                  </section>
               </div>
               <div class="col-lg-4 col-md-4">
                  <section class="diseases-articles">
                      <h2> Articles About Diseases</h2>
                      <diseases></diseases>
                  </section>
               </div>
           </div>
            <hr>
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <section class="fitness-articles">
                        <fitness></fitness>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DiseaseArticles from './DiseaseArticles.vue'
    import FitnessArticles from './FitnessArticles.vue'
    import MainArticle from './MainArticle.vue'
    export default {
        components: {
            'diseases': DiseaseArticles,
            'fitness': FitnessArticles,
            'main-story': MainArticle
        },
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
</style>