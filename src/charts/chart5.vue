<template>
    <div ref="chartOne" style="width: 95%; height: 300px; margin-top: -60px"></div>
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
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7']
    },
    axisLabel: {
        // 轴文字
        show: false,
        color: '#A0B2D3',
        fontSize: 14
    },
    axisLine: {
        // 轴线
        show: false,
        color: '#268C8C'
    },
    color: ['#53C8D1', '#59CB74'],
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
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
            }
        }
    ],
    legend: {
        textStyle: {
            color: '#fff',
            rich: {
                uname: {
                    width: 100
                },
                unum: {
                    color: '#4ed139',
                    width: 30,
                    align: 'right'
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
.demo {
    position: absolute;
}
</style>
