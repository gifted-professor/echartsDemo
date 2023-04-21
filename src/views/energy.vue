<template>
    <div class="container">
        <div class="leftChart">
            <div class="content" v-for="(item, index) in pumpState">
                <div class="title">
                    <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                    <p>4#天棚热泵主机</p>
                </div>
                <div class="container">
                    <div class="top">
                        <div class="Item">
                            <img src="../assets/gl.png" alt="" style="height: 90%" />
                            <div class="data">
                                <p style="margin-top: -1%">功率</p>
                                <p style="font-size: 25px; color: azure; margin: -10px 0">211.8</p>
                            </div>
                        </div>
                        <div class="Item" style="margin-left: -20px">
                            <img src="../assets/dl.png" alt="" style="height: 90%" />
                            <div class="data">
                                <p style="margin-top: -1%">电量</p>
                                <p style="font-size: 25px; color: azure; margin: -10px 0">272322.2</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="item">
                            <span class="itemName">机组运行工况</span>
                            <span class="itemState" style="background-color: rgb(225, 159, 64)">制热</span>
                        </div>
                        <div class="item">
                            <span class="itemName">机组运行工况</span>
                            <span class="itemState">运行</span>
                        </div>
                        <div class="item">
                            <span class="itemName">机组运行工况</span>
                            <span class="itemState">启动</span>
                        </div>
                        <div class="item">
                            <span class="itemName">机组运行工况</span>
                            <span class="itemState">启动</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="rightChart">
            <select>
                <option value="a">请选择</option>
            </select>
            <div class="electric">
                <div class="title">
                    <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                    <p>三项电压</p>
                </div>
                <div class="content">
                    <chart5></chart5>
                </div>
            </div>
            <div class="electric">
                <div class="title">
                    <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                    <p>三项电流</p>
                </div>
                <div class="content">
                    <chart3></chart3>
                </div>
            </div>
            <div class="electric" style="margin-top: -15%">
                <div class="title">
                    <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                    <p>超时访客数据</p>
                </div>
                <div class="content">
                    <chart4></chart4>
                </div>
            </div>
        </div>
    </div>
    <btn></btn>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useChartOptionStore } from '../store/chartOption'
import * as echarts from 'echarts'
import chart3 from '../charts/chart3.vue'
import chart4 from '../charts/chart4.vue'
import chart5 from '../charts/chart5.vue'
const chartOptionsStore = useChartOptionStore()
const chartFour = ref()
const chartFive = ref()

onMounted(() => {
    init()
})
function init() {
    if (chartFour.value) {
        const chart4 = echarts.init(chartFour.value)
        chart4.setOption(chartOptionsStore.option4)
    }
    if (chartFive.value) {
        const chart5 = echarts.init(chartFive.value)
        chart5.setOption(chartOptionsStore.option5)
    }
}
const videoList = reactive([
    {
        id: '001',
        name: '星关广场云台',
        path: '../assets/videoDemo.mp4'
    },
    {
        id: '002',
        name: '地上北侧',
        path: '../assets/videoDemo.mp4'
    },
    {
        id: '003',
        name: '后山艺术空间',
        path: '../assets/videoDemo.mp4'
    },
    {
        id: '004',
        name: 'T9后面',
        path: '../assets/videoDemo.mp4'
    },
    {
        id: '005',
        name: '门口',
        path: '../assets/videoDemo.mp4'
    },
    {
        id: '006',
        name: 'T9北侧',
        path: '../assets/videoDemo.mp4'
    },
    {
        id: '007',
        name: 'T3北侧',
        path: '../assets/videoDemo.mp4'
    },
    {
        id: '008',
        name: 'T7南侧',
        path: '../assets/videoDemo.mp4'
    },
    {
        id: '009',
        name: 'T6东侧',
        path: '../assets/videoDemo.mp4'
    },
    {
        id: '010',
        name: 'T2西侧',
        path: '../assets/videoDemo.mp4'
    },
    {
        id: '011',
        name: '健身空间',
        path: '../assets/videoDemo.mp4'
    },
    {
        id: '012',
        name: '王者峡谷',
        path: '../assets/videoDemo.mp4'
    }
])
const contentList = ref([
    {
        id: '1',
        name: '大西门云台',
        state: '待派遣',
        time: '07:12;18',
        color: '#fff'
    },
    {
        id: '1',
        name: 'A楼南侧',
        state: '待派遣',
        time: '07:12;18',
        color: '#fff'
    },
    {
        id: '1',
        name: 'T9北侧',
        state: '待派遣',
        time: '07:12;18',
        color: '#fff'
    },
    {
        id: '1',
        name: '大西门云台',
        state: '待派遣',
        time: '07:12;18',
        color: '#fff'
    },
    {
        id: '1',
        name: 'A楼南侧',
        state: '待派遣',
        time: '07:12;18',
        color: '#fff'
    },
    {
        id: '1',
        name: 'T9北侧',
        state: '待派遣',
        time: '07:12;18',
        color: '#fff'
    },
    {
        id: '1',
        name: '大西门云台',
        state: '待派遣',
        time: '07:12;18',
        color: '#fff'
    },
    {
        id: '1',
        name: 'A楼南侧',
        state: '待派遣',
        time: '07:12;18',
        color: '#fff'
    },
    {
        id: '1',
        name: 'T9北侧',
        state: '待派遣',
        time: '07:12;18',
        color: '#fff'
    },
    {
        id: '1',
        name: '大西门云台',
        state: '待派遣',
        time: '07:12;18',
        color: '#fff'
    },
    {
        id: '1',
        name: 'A楼南侧',
        state: '待派遣',
        time: '07:12;18',
        color: '#fff'
    },
    {
        id: '1',
        name: 'T9北侧',
        state: '待派遣',
        time: '07:12;18',
        color: '#fff'
    }
])

const pumpState = reactive([
    {
        name: '机组运行工况',
        state: '制热'
    },
    {
        name: '机组运行状态',
        state: '运行'
    },
    {
        name: 'C1启动状态',
        state: '启动'
    },
    {
        name: 'C2启动状态',
        state: '启动'
    }
])
</script>

<style scoped lang="scss">
.container {
    // background-color: #eee;
    margin: 3%;
    height: 85%;
    color: skyblue;
    width: 100%;
    position: absolute;
    display: flex;
    .title {
        display: flex;
        flex-direction: row;
        margin: -5px;
        width: 100%;
        p {
            margin-top: -2px;
            font-size: 20px;
            margin-left: 5px;
        }
    }
    .leftChart {
        display: flex;
        width: 20%;
        min-width: 350px;
        background-color: rgba(1, 1, 1, 0.08);
        height: 100%;
        box-shadow: 10px 5px 5px rgb(0 0 0 / 21%);
        position: relative;
        flex-direction: column;
        .content {
            height: 350px;
            width: 95%;
            .container {
                display: flex;
                flex-direction: column;
                width: 100%;
                margin-top: -1%;
                min-height: 400px;
                .top {
                    display: flex;
                    flex-direction: row;
                    min-width: 100px;
                    margin-left: -5%;

                    .Item {
                        display: flex;
                        width: 47%;
                        flex-direction: row;
                        img {
                            margin: 0 20px;
                        }
                    }
                }
                .footer {
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    .item {
                        width: 47%;
                        height: 25px;
                        display: flex;
                        color: #fff;
                        text-align: center;
                        margin: 5px;
                        .itemName {
                            line-height: 25px;
                            width: 60%;
                        }
                        .itemState {
                            line-height: 25px;
                            margin-left: 10px;
                            padding: 0 5px;
                            background-color: rgb(45, 212, 173);
                        }
                    }
                }
            }
        }
    }
    .rightChart {
        // display: flex;
        margin-right: 5%;
        margin-left: auto;
        width: 20%;
        min-width: 350px;
        background-color: rgb(40 40 40 / 8%);
        height: 100%;
        box-shadow: -10px 5px 5px rgb(0 0 0 / 21%);
        height: 100%;
        select {
            margin: 20px;
            color: #fff;
            font-size: 16px;
            width: 90%;
            letter-spacing: 3px;
            height: 40px;
            background-color: rgba(0, 0, 0, 0.2);
            border: 2px solid rgb(60, 62, 163);
            border-radius: 6px;
        }
        .electric {
            width: 100%;
            height: 240px;
            .title {
                display: flex;
                flex-direction: row;
                margin: 10px;
                p {
                    margin-top: -2px;
                    font-size: 22px;
                    margin-left: 5px;
                }
            }
            .content {
                display: flex;
                flex-direction: row;
                margin-left: 20px;
                margin-top: -5%;
                width: 100%;
                height: 300px;
            }
        }
    }
    .rightChart::-webkit-scrollbar {
        width: 0;
    }
}
</style>
