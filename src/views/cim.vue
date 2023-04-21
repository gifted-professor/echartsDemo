<template>
    <div class="container">
        <div class="leftChart">
            <div class="leftOne">
                <div class="title">
                    <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                    <p>安防概况</p>
                </div>
                <div class="container">
                    <div class="top">
                        <div class="item">
                            <img src="../assets/title.png" style="height: 80px" />
                        </div>
                        <div class="item">
                            <p>当前社区总人数</p>
                            <p style="font-size: 30px; margin-top: -10px">12530</p>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="itemt">
                            <p class="title">业主人数</p>
                            <p class="num">2318</p>
                        </div>
                        <div class="itemt">
                            <p class="title">访客人数</p>
                            <p class="num">880</p>
                        </div>
                        <div class="itemt">
                            <p class="title">外来人数</p>
                            <p class="num">174</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="leftThree">
                <div class="title">
                    <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                    <p>摄像头视频监控</p>
                </div>
                <div class="content">
                    <div class="videoList">
                        <div class="videoItem" v-for="(item, index) in videoList" :key="item.id">
                            <video src="../assets/videoDemo.mp4" controls muted width="110" height="70"></video>
                            <p class="videoName">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="leftTwo">
                <div class="title">
                    <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                    <p>报警讯息列表</p>
                </div>
                <div class="container">
                    <div class="contentList" v-for="(item, idnex) in contentList" :key="item.id">
                        <div class="left"></div>
                        <div class="right">
                            <div class="monitor">
                                监控{{ item.id }}: {{ item.name }}
                                <div class="state">{{ item.state }}</div>
                            </div>
                            <div class="time">{{ item.time }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="rightChart">
            <div class="content">
                <div id="rightOne">
                    <div class="title">
                        <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                        <p>舒适度数据统计</p>
                    </div>
                    <div class="container">
                        <div class="chartPart">
                            <div class="chart1"><chart1></chart1></div>
                            <div class="chart2">
                                <div class="item">
                                    <p>总负荷：32KW</p>
                                    <p style="background-color: #3ed1d8; color: #fff; width: 80px; display: flex; justify-content: center">32%</p>
                                </div>
                                <div class="item">
                                    <p>总能耗：53.685KW</p>
                                    <p style="background-color: #3ed1d8; color: #fff; width: 130px; display: flex; justify-content: center">53.685%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rightTwo">
                    <div class="title">
                        <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                        <p>能源数据概况</p>
                    </div>
                    <div class="chartPart">
                        <div class="data" v-for="(item, index) in energySumList">
                            <div class="dataName">{{ item.name }}</div>
                            <p class="dataNum">{{ item.num }}</p>
                        </div>
                    </div>
                </div>
                <div id="rightThree">
                    <div class="title">
                        <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                        <p>系统能效统计</p>
                    </div>
                    <div class="chartOne">
                        <chart3></chart3>
                    </div>
                </div>
                <div id="rightFour">
                    <div class="title">
                        <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                        <p>主机运行情况</p>
                    </div>

                    <div class="chartTwo">
                        <chart8></chart8>
                    </div>
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
import chart3 from '../charts/chart3.vue' //
import chart4 from '../charts/chart4.vue' //
import chart7 from '../charts/chart7.vue' //
import chart1 from '../charts/chart1.vue' //
import chart5 from '../charts/chart5.vue' //
import chart6 from '../charts/chart6.vue' //
import chart8 from '../charts/chart8.vue' //
const chartOptionsStore = useChartOptionStore() //
const chartTwo = ref() //
const chartFive = ref() //
const chartOne = ref()

onMounted(() => {
    init()
})
function init() {
    if (chartFive.value) {
        var chart5 = echarts.init(chartFive.value)
        chart5.setOption(chartOptionsStore.option5)
    }
    if (chartOne.value) {
        var chart1 = echarts.init(chartOne.value)
        chart1.setOption(chartOptionsStore.option1)
    }
    if (chartTwo.value) {
        var chart2 = echarts.init(chartTwo.value)
        chart2.setOption(chartOptionsStore.option1)
    }
}

const energySumList = reactive([
    {
        name: '本月总能耗（单位：kw.h）',
        num: '11878'
    },
    {
        name: '本月总能耗（单位：kw.h）',
        num: '11878'
    },
    {
        name: '本月总能耗（单位：kw.h）',
        num: '11878'
    },
    {
        name: '本月总能耗（单位：kw.h）',
        num: '11878'
    },
    {
        name: '本月总能耗（单位：kw.h）',
        num: '11878'
    },
    {
        name: '本月总能耗（单位：kw.h）',
        num: '11878'
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
        .leftOne {
            position: absolute;
            width: 80%;
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
            .container {
                display: flex;
                flex-direction: column;
                margin-top: -10%;
                width: 100%;
                .top {
                    display: flex;
                    flex-direction: row;
                    min-width: 140%;
                    .item {
                        margin-right: 6%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .itemt {
                        .title {
                            background: linear-gradient(to right, rgb(111, 156, 201), rgb(187, 130, 214));
                            padding: 5px;
                        }
                        .num {
                            display: flex;
                            justify-content: center;
                            font-size: 20px;
                        }
                    }
                }
                .footer {
                    display: flex;
                    flex-direction: row;
                    margin-top: -5%;
                    .itemt {
                        margin-right: 12%;
                        box-sizing: content-box;
                        .title {
                            width: 70px;
                            background: linear-gradient(to right, rgb(111, 156, 201), rgb(187, 130, 214));
                            // border: 20px;
                            color: aliceblue;
                        }
                        .num {
                            margin-top: -5%;
                            display: flex;
                            justify-content: center;
                            font-size: 20px;
                        }
                    }
                }
            }
        }
        .leftTwo {
            position: absolute;
            top: 400px;
            display: flex;
            flex-direction: column;
            width: 100%;
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
            .container {
                margin-top: 60px;
                height: 350px;
                width: 95%;
                overflow-x: hidden;
                display: flex;
                flex-direction: column;
                .contentList {
                    margin: 10px 0;
                    width: 95%;
                    display: -webkit-box;
                    flex-direction: row;
                    .left {
                        height: 60px;
                        width: 10px;
                        background-color: cornflowerblue;
                    }
                    .right {
                        font-size: 16px;
                        color: #b5b5b5;
                        width: 150%;
                        .monitor {
                            margin-bottom: 10px;
                            padding: 0px 10px;
                            background-color: rgba(0, 0, 0, 0.21);
                            width: 60%;
                            display: flex;
                            flex-direction: row;
                            .state {
                                margin-left: auto;
                                font-size: 10px;
                                color: #fff;
                                background-color: rgb(73, 134, 220);
                                padding: 5px;
                                border-radius: 6px;
                            }
                        }
                        .time {
                            padding: 0px 10px;
                            width: 370px;
                        }
                    }
                }
            }
            .container::-webkit-scrollbar {
                width: 0;
            }
        }
        .leftThree {
            position: absolute;
            top: 210px;
            display: flex;
            flex-direction: column;
            width: 100%;
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
                flex-direction: column;
                width: 320px;
                overflow-y: hidden;
                .videoList {
                    display: flex;
                    margin-top: -10%;
                    .videoItem {
                        width: 200px;
                        margin: 35px 10px;
                        .videoName {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 15px;
                            color: azure;
                            font-weight: 400;
                            margin: 3px;
                        }
                    }
                }
            }
            .content::-webkit-scrollbar {
                width: 0;
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
        .content {
            margin: 5%;
            #rightOne {
                margin-top: 10px;
                height: 230px;
                .container {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    .energyGrade {
                        display: flex;
                        flex-direction: row;
                        margin-top: -20px;
                        height: 5%;
                        width: auto;
                        .gradeItem {
                            height: 15px;
                            width: 45px;
                            margin: 15px 10px;
                            border: 1px solid #433fd3;
                        }
                        .gradeItem:nth-child(8) {
                            background: #00bfff;
                            color: #fff;
                            padding: 1px;
                            display: flex;
                            font-size: 10%;
                            justify-content: center;
                            align-items: center;
                            // margin-left: 20px;
                        }
                    }
                    .chartPart {
                        height: 200px;
                        margin-left: -10%;
                        margin-top: -4%;
                        width: 70%;
                        display: flex;
                        font-size: 10px;
                        .chart1 {
                            width: 30%;
                        }
                        .chart2 {
                            margin-left: -5%;
                            width: 55%;
                            height: 50%;
                            margin-top: 10px;
                            .item {
                                height: 40px;
                            }
                        }
                    }
                }
            }
            #rightTwo {
                margin-top: -15%;
                .chartPart {
                    display: flex;
                    width: 100%;
                    flex-wrap: wrap;
                    margin: 5%;
                    .data {
                        width: 47%;
                        // padding: 1%;
                        margin: -3% 0;
                        .dataName {
                            font-size: 10px;
                            color: #fff;
                        }
                        .dataNum {
                            display: flex;
                            justify-content: center;
                            font-size: 25px;
                            margin-top: 5px;
                        }
                    }
                }
            }
        }
    }
    .rightChart::-webkit-scrollbar {
        width: 0;
    }
}
</style>
