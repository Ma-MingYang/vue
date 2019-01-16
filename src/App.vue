<template>
<div id="app" ref="containerbox">
    <router-view />
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            screenWidth: document.body.clientWidth,

        }
    },
    methods: {
        mounted() {
          // 数据首次加载完成
            this.$nextTick(()=>{
              let container = this.$ref.containerbox;
              let wcontainerbox=container[0].getBoundingClientRect().width;
              this.containerbox.height=document.body.clientHeight;
            })
            const that = this;
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth;
                    that, screenWidth = window.screenWidth;
                })()
            };

        },
    },
    // watch: {
    //     screenWidth(val) {
    //         if (!this.timer) {
    //             this.screenWidth = val;
    //             this.timer = true;
    //             console.log(this.screenWidth)
    //             let that = this;
    //             setTimeout(() => {
    //                 that.timer = false;
    //             }, 400);
    //         }
    //     }
    // }
}
</script>

<style>
body {
    margin: 0;
    /* height: 100%; */
    /* width: 100%; */
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
    /* height: 100%; */
}
</style>
