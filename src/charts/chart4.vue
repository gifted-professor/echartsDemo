<template>
    <div ref="chartOne" style="width: 95%; height: 200px"></div>
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
        text: '近一周访客超时楼栋分布',
        left: '10%',
        top: '5%',
        textStyle: {
            color: '#fff',
            fontSize: 10
        }
    },
    subtextStyle: {
        fontSize: 28,
        color: '#333'
    },
    grid: {
        x: 20,
        y: 20,
        top: '18%',
        left: '5%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['6-27', '6-27', '6-27', '6-27', '6-27', '6-27', '6-27'],
        axisLabel: {
            color: 'white'
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: 'white'
        }
    },
    series: [
        {
            data: [
                120,
                {
                    value: 226,
                    itemStyle: {
                        color: '#40e0d0	'
                    }
                },
                150,
                {
                    value: 143,
                    itemStyle: {
                        color: '#40e0d0	'
                    }
                },
                70,
                {
                    value: 163,
                    itemStyle: {
                        color: '#40e0d0	'
                    }
                },
                88
            ],
            type: 'bar'
        }
    ]
}
</script>

<style scoped lang="scss"></style>
