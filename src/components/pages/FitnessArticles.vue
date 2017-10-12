<template>
    <div class="fitness-articles">
        <h4>Fitness articles here</h4>
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
    }
</script>

<style>

</style>