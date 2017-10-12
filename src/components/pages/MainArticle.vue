<template>
    <div class="main-article">
        <h3>Main Article</h3>
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
    }
</script>

<style>

</style>