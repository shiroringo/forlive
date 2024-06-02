<template>
  <div class="clock">
    <div>{{ clock.date }} {{ clock.week }}</div>
    <div class="time">{{ clock.time }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
const clock = ref({
  time: '',
  date: '',
  week: ''
})
const setTime = () => {
  const now = new Date()
  // clock.value = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  clock.value.time =
    zeroPadding(now.getHours(), 2) +
    ':' +
    zeroPadding(now.getMinutes(), 2) +
    ':' +
    zeroPadding(now.getSeconds(), 2)
  clock.value.date =
    zeroPadding(now.getFullYear(), 4) +
    '-' +
    zeroPadding(now.getMonth() + 1, 2) +
    '-' +
    zeroPadding(now.getDate(), 2)
  clock.value.week = week[now.getDay()]
}

function zeroPadding(num: number, digit: number) {
  var zero = ''
  for (var i = 0; i < digit; i++) {
    zero += '0'
  }
  return (zero + num).slice(-digit)
}
onMounted(() => {
  setInterval(setTime, 1000)
})
</script>

<style>
  .clock {
    font-size: 70px;
    font-weight: 900;
    background-color: transparent;
    min-height: 100vh;
    width: 100%;
    align-items: center;
  }
  .time {
    font-family: 'Times New Roman', Times, serif;
    font-size: 160px;
    font-weight: 900;
    width: 100%;
  }
</style>
