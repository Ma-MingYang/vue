<template>
<div class="hello">
    <button @click="getUEContent()">getUEContent</button>
    <div style='height:500px'>
        <UE ref='ue' :defaultMsg=defaultMsg :config=config></UE>

    </div>
    <!-- <div id="myChart" :style="{ height: '300px'}"></div> -->
    <!-- <el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple-dark"></div>
        </el-col>
    </el-row> -->

    <!-- <el-container style="height:100%;" direction='vertical'>
    <el-header>顶部</el-header>
    <el-container>

        <el-aside width="200px" :style='{lineHeight:mainheight+"px"}' style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>导航一</template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="3-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="3-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-main :style='{lineHeight:mainheight+"px"}'>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</el-container> -->
</div>
</template>

<script>
// let echarts = require('echarts/lib/echarts')

import UE from './ueditorTest.vue'
export default {
    name: 'HelloWorld',
    components: {
        UE
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            mainheight: document.body.clientHeight,
            defaultMsg: 'uemoren',
            config: {
                initialFrameWidth: 1600,
                initialFrameHeight: 350,
            }
        }
    },
    created(){
        
    },
    mounted: function () {
        // this.drawLine();
        // this.ue = UE.getEditor('editor', {
        //     'autoHeightEnabled': false
        // })
    },
    methods: {
        // loadModel(){
        //     this.ue.setContent('内容')
        // },
        getUEContent() {
            let content = this.$refs.ue.getUEContent();
            this.$notify({
                title: '获取成功，可在控制台查看！',
                message: content,
                type: 'success'
            });
            console.log(content)
        },
        // drawLine() {
        //     let myChart = echarts.init(document.getElementById('myChart'))
        //     // 绘制图表
        //     myChart.setOption({
        //         title: {
        //             // text: '某楼盘销售情况',
        //             // subtext: '纯属虚构'
        //         },
        //         tooltip: {
        //             trigger: 'axis'
        //         },
        //         legend: {
        //             data: ['idea', 'book', 'deal'], //与series中name保持一致，才会出现图例
        //             // /icon: "circle", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none

        //             itemWidth: 10, // 设置宽度

        //             itemHeight: 10, // 设置高度

        //             itemGap: 40 // 设置间距
        //         },
        //         toolbox: {
        //             show: true,
        //             feature: {
        //                 mark: {
        //                     show: true
        //                 },
        //                 dataView: {
        //                     show: true,
        //                     readOnly: false
        //                 },
        //                 magicType: {
        //                     show: true,
        //                     type: ['line', 'bar', 'stack', 'tiled']
        //                 },
        //                 restore: {
        //                     show: true
        //                 },
        //                 saveAsImage: {
        //                     show: true
        //                 }
        //             }
        //         },
        //         calculable: true,
        //         xAxis: [{
        //             type: 'category',
        //             boundaryGap: false,
        //             data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        //         }],
        //         yAxis: [{
        //             type: 'value'
        //         }],

        //         series: [{
        //                 name: 'deal',
        //                 type: 'line',
        //                 smooth: false,
        //                 itemStyle: {
        //                     normal: {
        //                         areaStyle: {
        //                             type: 'default',
        //                             color: 'lightblue'
        //                         },
        //                         // color: 'black',
        //                         // borderColor: 'red'
        //                     },
        //                     lineStyle: {
        //                         type: "dotted"
        //                     }
        //                 },
        //                 data: [10, 12, 21, 54, 260, 830, 710]
        //             },
        //             {
        //                 name: 'book',
        //                 type: 'line',
        //                 smooth: false,
        //                 itemStyle: {
        //                     normal: {
        //                         areaStyle: {
        //                             type: 'default'
        //                         }
        //                     },
        //                     lineStyle: {
        //                         type: "dotted"
        //                     }
        //                 },
        //                 data: [30, 182, 434, 791, 390, 30, 10]
        //             },
        //             {
        //                 name: 'idea',
        //                 type: 'line',
        //                 smooth: false,
        //                 itemStyle: {
        //                     normal: {
        //                         areaStyle: {
        //                             type: 'default'
        //                         }
        //                     },
        //                     lineStyle: {
        //                         type: "dotted"
        //                     }
        //                 },
        //                 data: [1320, 1132, 601, 234, 120, 90, 20]
        //             }
        //         ]
        //     });

        // }
    },
    watch: {
        mainheight(val) {
            if (!this.timer) {
                this.mainheight = val;
                this.timer = true;
                console.log(this.mainheight)
                let that = this;
                setTimeout(() => {
                    that.timer = false;
                }, 400);
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.hello {
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
    // height: 300px;
    width: 70%;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}

.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

// li {
//     display: inline-block;
//     margin: 0 10px;
// }

a {
    color: #42b983;
}

.el-row {
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
