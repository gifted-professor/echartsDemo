<template>
    <div ref="chartOne" style="width: 350px; height: 200px; margin-top: -60px"></div>
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
        // text: 'World Population'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        textStyle: {
            color: 'rgba(255, 255, 255, 1)',
            fontSize: 20
        },
        left: '30%',
        top: '10%'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
            color: 'white'
        }
    },
    yAxis: {
        type: 'category',
        data: ['当前', '最低', '最高', '初始']
    },
    axisLabel: {
        // 轴文字
        show: false,
        color: '#A0B2D3',
        fontSize: '30'
    },
    axisLine: {
        // 轴线
        show: false,
        color: '#268C8C'
    },
    series: [
        {
            name: '地热平衡',
            type: 'bar',
            data: [18203, 23489, 29034, 104970]
        },
        {
            name: '节能环保',
            type: 'bar',
            data: [19325, 23438, 31000, 121594],
            itemStyle: {
                barBorderRadius: [2, 2, 0, 0], //柱体圆角
                color: new echarts.graphic.LinearGradient(
                    //前四个参数用于配置渐变色的起止位置，这四个参数依次对应 右下左上 四个方位。也就是从右边开始顺时针方向。
                    //通过修改前4个参数，可以实现不同的渐变方向
                    /*第五个参数则是一个数组，用于配置颜色的渐变过程。
                                                  每项为一个对象，包含offset和color两个参数
                                                */
                    1,
                    0,
                    0,
                    0,
                    [
                        {
                            //代表渐变色从正上方开始
                            offset: 0.4, //offset范围是0~1，用于表示位置，0是指0%处的颜色
                            color: '#6A5ACD'
                        }, //柱图渐变色
                        {
                            offset: 1, //指100%处的颜色
                            color: '#00C6FB'
                        }
                    ]
                )
            },
            textStyle: {
                color: '#ebf8ac'
            }
        }
    ]
}
</script>

<style scoped lang="scss">
.demo {
    // position: absolute;
}
</style>
