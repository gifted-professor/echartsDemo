<template style="height: 100%">
    <div class="container">
        <div class="leftChart">
            <div class="content">
                <div class="title">
                    <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                    <p>安防概况</p>
                </div>
                <div class="container">
                    <div class="top">
                        <div class="item">
                            <img src="../assets/title.png" style="height: 60px" />
                        </div>
                        <div class="item">
                            <p>当前社区总人数</p>
                            <p style="font-size: 30px; margin-top: -10px">12530</p>
                        </div>
                        <div class="item">
                            <p class="title" style="background: linear-gradient(to right, rgb(111, 156, 201), rgb(187, 130, 214))">黑名单</p>
                            <p class="num">25</p>
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
            <div class="contentR">
                <div class="title">
                    <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                    <p>摄像头覆盖占比</p>
                </div>
                <div class="container">
                    <!-- <div ref="chartFour" style="width: 100%; height: 300px"></div> -->
                    <div class="chartPart">
                        <chart1></chart1>
                    </div>
                    <div class="cameraInfo">
                        <span>覆盖区域显示</span>
                        <span>人脸识别区域：32%</span>
                        <span>可控摄像头区域：53.685%</span>
                    </div>
                </div>
            </div>
            <div class="contentT">
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
            <div class="title">
                <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                <p>摄像头视频监控</p>
            </div>
            <div class="content">
                <div class="videoList">
                    <div class="videoItem" v-for="(item, index) in videoList" :key="item.id">
                        <video src="../assets/videoDemo.mp4" controls muted width="140" height="140"></video>
                        <p class="videoName">{{ item.name }}</p>
                    </div>
                </div>
                <div class="videoList">
                    <div class="videoItem" v-for="(item, idnex) in videoList" :key="item.id">
                        <video src="../assets/videoDemo.mp4" controls muted width="140" height="140"></video>
                        <p class="videoName">{{ item.name }}</p>
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
import chart1 from '../charts/chart1.vue'
const chartOptionsStore = useChartOptionStore()
const chartFour = ref()

onMounted(() => {
    init()
})
function init() {
    if (chartFour.value) {
        var chart4 = echarts.init(chartFour.value)
        chart4.setOption(chartOptionsStore.option4)
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
</script>

<style scoped lang="scss">
.container {
    // background-color: #eee;
    margin: 3%;
    height: 85%;
    top: 0;
    color: skyblue;
    width: 100%;
    position: absolute;
    display: flex;
    .leftChart {
        display: flex;
        width: 20%;
        min-width: 350px;
        background-color: rgba(1, 1, 1, 0.08);
        min-width: 350px;
        height: 100%;
        box-shadow: 10px 5px 5px rgb(0 0 0 / 21%);
        position: relative;
        flex-direction: column;
        .content {
            position: absolute;
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
                display: flex;
                flex-direction: column;
                margin-top: 10%;
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
                        margin-right: 6%;
                        box-sizing: content-box;
                        .title {
                            width: 70px;
                            background: linear-gradient(to right, rgb(111, 156, 201), rgb(187, 130, 214));
                            // border: 20px;
                            color: aliceblue;
                        }
                        .num {
                            display: flex;
                            justify-content: center;
                            font-size: 20px;
                        }
                    }
                }
            }
        }
        .contentR {
            position: absolute;
            top: 220px;
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
                display: flex;
                flex-direction: row;
                width: 100%;
                margin-left: -5%;
                color: #fff;
                .chartPart {
                    width: 40%;
                    height: 250px;
                }
                .cameraInfo {
                    width: 55%;
                    margin-top: 8%;
                    display: flex;
                    flex-direction: column;
                    span {
                        margin: 10px 0;
                    }
                }
            }
        }
        .contentT {
            position: absolute;
            top: 410px;
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
    }
    .rightChart {
        margin-right: 5%;
        margin-left: auto;
        width: 20%;
        min-width: 350px;
        background-color: rgb(40 40 40 / 8%);
        height: 100%;
        box-shadow: -10px 5px 5px rgb(0 0 0 / 21%);
        height: 100%;
        overflow-x: hidden;
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
            margin: 5%;
            .videoList {
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-top: -10%;
                .videoItem {
                    width: 200px;
                    margin-top: 20px;
                    .videoName {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 20px;
                        color: azure;
                        font-weight: 400;
                        margin: 3px;
                        margin-left: -20%;
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
