<template>
    <div class="app-links">
        <div class="container">
            <h2>Most Popular Health Apps</h2>
            <section>
                <div class="col-lg-3 col-md-3" v-for="app_link in appStore.all_apps">
                    <div class="thumbnail">
                        <img :src="'http://localhost:8000/uploads/app-link-images/' + app_link.image">
                        <div class="caption">
                            <p>{{app_link.title}}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        computed: mapState({
            appStore: state => state.appStore
        }),
        created() {
            this.$store.dispatch('setAppsList')
        },
        mounted() {
            this.$store.dispatch('setAppsList')
        },
    }
</script>

<style lang="sass">
    .app-links img
        height: 120px
        width: 120px
</style>