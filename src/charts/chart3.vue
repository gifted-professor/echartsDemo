<template>
    <div ref="chartOne" style="width: 95%; height: 150px"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
const chartOne = ref()

onMounted(() => {
    init()
})
function init() {
    var chart1 = echarts.init(chartOne.value)
    chart1.setOption(option)
}

let option = {
    title: {
        text: '近一月报警次数',

        left: '10%',
        textStyle: {
            color: '#fff',
            fontSize: 10
        }
    },
    // backgroundColor: "#05224d",
    tooltip: {},
    grid: {
        x: 20,
        y: 20,
        top: '8%',
        left: '1%',
        right: '1%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [
        {
            name: 'Evaporation',
            type: 'category',
            boundaryGap: true,
            axisLine: {
                //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#f9f9f9'
                }
            },
            axisLabel: {
                //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#d1e6eb',
                    margin: 15
                }
            },
            axisTick: {
                show: false
            },
            data: ['6-27', '6-27', '6-27', '6-27', '6-27', '6-27', '6-27', '6-27', '6-27']
        }
    ],
    yAxis: [
        {
            // name: '近一月报警次数',
            nameTextStyle: {
                color: 'rgba(100,149,237,1.000)',
                fontStyle: 'normal',
                fontSize: 13,
                fontFamily: 'sans-serif',
                borderDashOffset: 0,
                shadowOffsetX: 0
            },
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 7,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0a3256',
                    type: 'borderDashOffset'
                }
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: '#d1e6eb'
                }
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [
        {
            name: '注册总量',
            type: 'line',
            symbol: 'emptyCircle', //空心圆
            symbolSize: 6, //点的大小
            lineStyle: {
                normal: {
                    color: '#7B68EE' // 线条颜色
                },
                borderColor: '#f0f'
            },
            itemStyle: {
                normal: {
                    color: '#A52A2A' //点的颜色
                }
            },
            tooltip: {
                show: false
            },
            areaStyle: {
                //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(139,0,139,1.000)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,0,0,0)'
                            }
                        ],
                        false
                    ),
                    shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: [20, 28, 40, 33, 68, 55, 42, 33, 11]
        }
    ]
}
</script>

<style scoped lang="scss"></style>
