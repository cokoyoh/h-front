<template>
    <div class="all-bookings">
        <div class="container">
            <h4>All Bookings here</h4>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: mapState({
            carStore: state => state.carStore
        }),
        created(){
            this.$store.dispatch('setAllBookingsList')
        }
    }
</script>

<style lang="sass">
    .all-bookings
        padding: 30px 0 60px
</style>