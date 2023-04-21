<template>
    <div class="container">
        <div class="leftChart">
            <div class="content">
                <div id="leftOne">
                    <div class="title">
                        <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                        <p>当代能效标识</p>
                    </div>
                    <div class="container">
                        <div class="energyGrade">
                            <p>低</p>
                            <div class="gradeItem" v-for="item of 5" :key="item"></div>
                            <p>高</p>
                            <p class="gradeItem">一级</p>
                        </div>
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
                <div id="leftTwo">
                    <div class="title">
                        <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                        <p>系统费用统计</p>
                    </div>
                    <div class="chartPart">
                        <chart4></chart4>
                    </div>
                </div>
                <div id="leftThree">
                    <div class="title">
                        <img src="../assets/titleImg.png" alt="" style="height: 35px; width: 35px; margin-right: 10px" />
                        <p>各类型费用占比</p>
                    </div>
                    <div class="chartPart">
                        <chart6 :value="pieChartOne"></chart6>
                    </div>
                </div>
                <div id="leftFour">
                    <div class="title">
                        <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                        <p>能源分析</p>
                    </div>
                    <div class="chartPart">
                        <chart7></chart7>
                    </div>
                </div>
            </div>
        </div>
        <div class="rightChart">
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
            <div class="electric">
                <div class="title">
                    <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                    <p>系统能效统计</p>
                </div>
                <div class="content">
                    <chart3></chart3>
                </div>
            </div>
            <div class="electric" style="margin-top: -30%">
                <div class="title">
                    <img src="../assets/titleImg.png" alt="" style="height: 25px; width: 25px; margin-right: 10px" />
                    <p>运行相关数据</p>
                </div>
                <div class="table">
                    <ul class="title">
                        <li v-for="(item, index) in data" :key="index">{{ item }}</li>
                    </ul>
                    <ul class="content">
                        <li v-for="item in 9" :key="item">
                            <p v-for="(d, index) in data1" :key="index">{{ d }}</p>
                        </li>
                    </ul>
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
const chartOptionsStore = useChartOptionStore() //
const chartFour = ref() //
const chartFive = ref() //
const chartOne = ref()

onMounted(() => {
    init()
})
function init() {
    // var chart4 = echarts.init(chartFour.value)
    // chart4.setOption(chartOptionsStore.option4)
    if (chartFive.value) {
        var chart5 = echarts.init(chartFive.value)
        chart5.setOption(chartOptionsStore.option5)
    }

    if (chartOne.value) {
        var chart1 = echarts.init(chartOne.value)
        chart1.setOption(chartOptionsStore.option1)
    }
}

const pieChartOne = reactive({
    title: { text: '费用占比' },
    iconPath: '../assets/fy.png',
    chartData: [
        { name: '天棚主机', value: 18 },
        { name: '天棚水泵', value: 10 },
        { name: '新风主机', value: 10 },
        { name: '新风水泵', value: 10 },
        { name: '地源水泵', value: 10 },
        { name: '冷却水泵', value: 10 }
    ], //饼状图数据,
    series: {
        //控制饼状图样式
        radius: [50, 40], //控制饼状图形状 是否空心...
        center: ['30%', '50%'] //控制饼状图位置
    },
    legend: {
        top: '25%'
    },
    chartColor: ['#FF1493', '#0000FF', '#7FFFD4', '#008000', '#7B68EE', '#6A5ACD']
})

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

const data = ['名称', '总电量', '总电费', '总负荷', '平均耗能']
const data1 = ['天棚水坝', 2345.7, 4321.4, 12.3, 23.3]
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
            // height: 350px;
            width: 100%;

            #leftOne {
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
                        margin-right: auto;
                        margin-top: -4%;
                        width: 100%;
                        display: flex;
                        font-size: 10px;
                        .chart1 {
                            width: 40%;
                            margin-right: auto;
                        }
                        .chart2 {
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
            #leftTwo {
                margin-top: -50px;
                .chartPart {
                    margin-top: -5%;
                }
            }
            #leftThree {
                margin: 5% 0;
                .chartPart {
                    width: 95%;
                    position: relative;
                    margin-top: -10%;
                }
            }
            #leftFour {
                margin-top: -10%;
                .chartPart {
                    width: 95%;
                    position: relative;
                    margin-top: 5%;
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
        #rightTwo {
            margin-top: 5%;
            .title {
                margin-left: 3%;
            }
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
        .electric {
            height: 300px;
            margin-bottom: -15%;
            .title {
                display: flex;
                flex-direction: row;
                margin: 10px;
                margin-bottom: -3%;
                p {
                    margin-top: -2px;
                    font-size: 22px;
                    margin-left: 5px;
                }
            }
            .content {
                margin-left: 18px;
                width: 90%;
            }
            .table {
                height: 90%;
                margin-left: -15%;
                margin-top: -5%;

                .title {
                    height: 30px;
                    display: flex;
                    list-style: none;
                    justify-content: space-around;
                    color: rgb(37, 199, 255);
                    li {
                    }
                    li:nth-child(2) {
                        // background-color: rgba(37, 199, 255, 0.5);
                        margin-left: 8%;
                    }
                    li:nth-child(5) {
                        // background-color: rgba(37, 199, 255, 0.5);
                        margin-left: -5%;
                    }
                }

                .content {
                    display: flex;
                    height: 100%;
                    list-style: none;
                    flex-direction: column;
                    li {
                        line-height: 0px;
                        display: flex;
                        justify-content: space-around;
                        color: #fff;
                    }

                    li:nth-child(2n-1) {
                        background-color: rgba(37, 199, 255, 0.5);
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
