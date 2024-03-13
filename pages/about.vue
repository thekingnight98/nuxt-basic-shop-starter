<template>
  <div class="container">
    <h1>This is About page.</h1>
    <img src="/images/about.svg" alt="" srcset="">
  </div>
</template>

<script setup>
useHead({
  title : "Arm shop | เกี่ยวกับเรา",
  meta : [
    {
      name : "description" , content : "เกี่ยวกับเรา"
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
  width : 500px;
  height: 500px;
}

</style>