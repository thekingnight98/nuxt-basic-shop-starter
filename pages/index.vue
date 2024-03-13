<template>
  <div class="container">
    <h1>This Home page website</h1>
    <img src="/images/shopping.svg" alt="" srcset="" />
  </div>
</template>

<script setup>
useHead({
  title : "Arm shop | หน้าแรกของเว็บไซต์",
  meta : [
    {
      name : "description" , content : "ร้านค้า,อุปกรณ์คอมพิวเตอร์เสื้อผ้า"
    }
  ]
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  width: 500px;
  height: 500px;
}
</style>