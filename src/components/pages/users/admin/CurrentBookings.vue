<template>
    <div class="current-bookings">
        <div class="container">
            <h4>Current Bookings</h4>
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
            this.$store.dispatch('setCurrentBookingsList')
        }
    }
</script>

<style lang="sass">
    .current-bookings
        padding: 30px 0 60px
</style>