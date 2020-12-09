<template>
    <div class="namedviews">
        <ul>
            <li><router-link  to="/a">a</router-link></li>
            <li><router-link  to="/b">b</router-link></li>
            <li><router-link  to="/c">c</router-link></li>
        </ul>
        <router-view></router-view> 
        <router-view name="b"></router-view> 
        <router-view name="c"></router-view> 
        
    </div>
</template>

<script>
    export default {
        name: "namedviews",
        props: {},
        data () {
            return {};
        },
        computed: {},
        created () {},
        methods: {}
    };
</script>

<style lang="less" scoped>
    .namedviews {

    }
</style>
<style lang="less">
    .namedviews {

    }
</style>
