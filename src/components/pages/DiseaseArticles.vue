<template>
    <div class="diseases-articles">
        <h4>Diseases here</h4>
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
    }
</script>

<style>

</style>