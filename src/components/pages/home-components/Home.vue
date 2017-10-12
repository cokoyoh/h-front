<template>
    <div class="home-page" id="home-page">
        <header-page></header-page>
        <!--<snap></snap>-->
        <app-link></app-link>
    </div>
</template>

<script>
    import HeaderPage from './Header.vue'
    import Snap from './SnapDetails.vue'
    import AppLinks from './AppLinks.vue'

    export default {
        data() {
            return {}
        },
        components: {
            'header-page': HeaderPage,
            'snap': Snap,
            'app-link': AppLinks
        }

    }
</script>

<style lang="sass">
    .home-page  h2
            font-family: 'Noto Sans', sans-serif

    .home-page  p, h4, b
            font-family: 'Lato', sans-serif
</style>