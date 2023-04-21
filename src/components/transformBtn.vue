<template>
    <view class="footer">
        <div class="btnOne" ref="root" v-for="(item, index) in btnDate" @click="goto(index, item.path)">{{ item.name }}</div>
    </view>
</template>

<script setup lang="ts">
import { ref, watch, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGlobalStore } from '../store/global'
const router = useRouter()
const globalStore = useGlobalStore()
const btnDate = reactive([
    { id: '001', name: '社区管理', path: 'community' },
    { id: '002', name: '安保监控', path: 'monitor' },
    { id: '003', name: 'CIM平台', path: 'CIM' },
    { id: '004', name: '能源检测', path: 'energy' },
    { id: '005', name: '节能分析', path: 'analyse' }
])
const root: any = ref(null)
let curIndex = ref(2)

const goto = (index: any, path: string) => {
    if (curIndex !== index) {
        globalStore.curIndex = index
        curIndex.value = index
    }
    router.push({ path })
}

watch(curIndex, (newValue, oldValue) => {
    root.value[oldValue].style.color = '#fff'
    root.value[oldValue].style.fontWeight = '500'
    root.value[oldValue].style.fontSize = '15px'
    root.value[newValue].style.color = '#68bbaf'
    root.value[newValue].style.fontWeight = '600'
    root.value[newValue].style.fontSize = '16px'
})

onMounted(() => {
    root.value[globalStore.curIndex].style.color = '#68bbaf'
    root.value[globalStore.curIndex].style.fontWeight = '600'
    root.value[globalStore.curIndex].style.fontSize = '16px'
})
</script>

<style scoped lang="scss">
.footer {
    justify-content: center;
    width: 100%;
    min-width: 800px;
    display: flex;
    position: absolute;
    bottom: 5%;
    height: 100px;
    .btnOne {
        margin: 30px;
        width: 100px;
        height: 45px;
        font-size: 15px;
        border-radius: 10px;
        border: 1px solid #7c67ee;
        background-color: rgb(0 0 0 / 8%);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: 500;
        cursor: pointer;
    }
    // .btnOne:active {
    //     color: #4fa9fd;
    //     border: 1px solid #4fa9fd;
    // }
}
</style>
