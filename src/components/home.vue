<template>
    <div class="home">
        <div class="home-left">
            <ul id="main">
                <li @click="push('/home/homeLeft')">商品</li>
                <li><router-link  to="/homeLeft" append>评价</router-link></li>
                <li @click="push('/home/homea')">homea</li>
            </ul>
            
        </div>
        <router-view></router-view> 
    </div>
</template>

<script>
    export default {
        name: "home",
        props: {},
        data () {
            return {};
        },
        computed: {},
        created () {},
        methods: {
            push(path){
                this.$router.push({
                    path: path,
                    append: true
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .home {

        .home-left {
            min-height: 200px;
            width: 100px;
            background: #c0c0c0;
        }
    }
</style>
<style lang="less">
    .home {
        display: flex;
    }
</style>
