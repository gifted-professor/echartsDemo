<template>
    <div ref="chartOne" style="height: 95%; width: 95%"></div>
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
    // backgroundColor: '#091018',
    series: {
        type: 'pie',
        clockWise: false,
        radius: [50, '50%'],
        hoverAnimation: false,
        silent: true,
        center: ['60%', '40%'],
        data: [
            {
                value: 75,
                // name: 'invisible',
                itemStyle: {
                    normal: {
                        color: '#071925',
                        borderWidth: 1,
                        borderColor: '#073A66'
                    }
                }
            },
            {
                value: 25,
                label: {
                    normal: {
                        rich: {
                            a: {
                                color: '#82ffff',
                                align: 'center',
                                fontSize: 16,
                                fontWeight: 'bold',
                                fontFamily: '方正粗倩_GBK'
                            },
                            b: {
                                color: '#08a0df',
                                align: 'center',
                                fontSize: 10
                            },
                            c: {
                                fontSize: 15,
                                fontFamily: '方正粗倩_GBK',
                                fontWeight: 'bold'
                            }
                        },
                        formatter: function (params) {
                            return '{a|' + params.value + '}' + ' {c|%}' + '\n\n{b|覆盖区域}'
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '6',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#139FBE',
                        shadowColor: '#82ffff',
                        borderWidth: 2,
                        borderColor: '#82ffff',
                        shadowBlur: 10
                    }
                }
            }
        ]
    }
}
</script>

<style scoped lang="scss"></style>
