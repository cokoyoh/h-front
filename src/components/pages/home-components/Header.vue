<template>
    <div class="header" id="header">
        <div class="container">
            <h2>Health Portal</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <b>
                Donec luctus egestas massa vitae scelerisque. Quisque non velit tincidunt, blandit nisl at, rhoncus lorem.
            </b> <br> <br>
            <router-link to="#">
                <button class="btn-clear btn btn-lg btn-default">Explore Health Articles</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="sass">
    .header
        padding: 50px 0 60px
        height: 500px
        width: 100%
        text-align: center
        background-image: url("../../../images/background/health-background.jpg")
        background-position: center
        background-repeat: no-repeat
        background-size: cover
        .btn-clear
            background-color: transparent !important
            color: #222222
            border: 2px solid #0099cc
            font-weight: 600
    .header h2
        font-family: 'Noto Sans', sans-serif
        font-size: 50px
        color: #222222

    .header p
        font-family: 'Lato', sans-serif
        font-size: 30px
        text-align: center
        color: #222222
    .header b
        font-family: 'Lato', sans-serif
        text-align: center
        color: #222222

</style>