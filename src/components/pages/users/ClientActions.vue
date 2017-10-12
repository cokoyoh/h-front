<template>
    <div class="client-actions" id="client-actions">
        <div class="container">
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {add_user_feedback_url, get_header} from "../../../global/config";

    export default {
        data(){
          return{
              feedback: ''
          }
        },
        computed: mapState({
//            projectsStore: state => state.projectsStore
        }),
        created() {
        },
    }
</script>

<style lang="sass">
    .client-action p
        font-family: 'Lato', sans-serif
</style>